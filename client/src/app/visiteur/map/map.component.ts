import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Imports OpenLayers
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style, Text } from 'ol/style';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import { defaults as defaultControls } from 'ol/control';
import Point from 'ol/geom/Point';
import Overlay from 'ol/Overlay';
import { FeatureLike } from 'ol/Feature';

interface MapPlace {
  id: number;
  name: string;
  category: string;
  latitude: number;
  longitude: number;
  description?: string;
  openingTime?: string;
  closingTime?: string;
  events?: any[];
}

interface LegendItem {
  category: string;
  label: string;
  colorClass: string;
  color: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map!: Map;
  markersLayer!: VectorLayer<VectorSource>;
  places: MapPlace[] = [];
  selectedPlace: MapPlace | null = null;
  selectedCategory: string = 'all';
  isBrowser: boolean;
  isLoading: boolean = true;
  popup?: Overlay;

  // Éléments de légende
  legendItems: LegendItem[] = [
    {category: 'scene', label: 'Scènes', colorClass: 'bg-scene', color: '#EC4899'},
    {category: 'food', label: 'Nourriture', colorClass: 'bg-food', color: '#F59E0B'},
    {category: 'drink', label: 'Boissons', colorClass: 'bg-drink', color: '#3B82F6'},
    {category: 'toilet', label: 'Toilettes', colorClass: 'bg-toilet', color: '#10B981'},
    {category: 'firstaid', label: 'Premiers secours', colorClass: 'bg-firstaid', color: '#EF4444'},
    {category: 'entrance', label: 'Entrées/Sorties', colorClass: 'bg-entrance', color: '#8B5CF6'}
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Chargement des données des lieux
    this.loadPlaces();
  }

  ngAfterViewInit(): void {
    // Initialiser la carte uniquement côté navigateur
    if (this.isBrowser) {
      setTimeout(() => {
        this.initMap();
      }, 100); // Ajout d'un petit délai pour s'assurer que le DOM est prêt
    }
  }

  ngOnDestroy(): void {
    // Nettoyer la carte lors de la destruction du composant
    if (this.map) {
      this.map.setTarget(undefined);
    }
  }

  initMap(): void {
    // Créer la source de données pour les marqueurs
    const markersSource = new VectorSource();

    // Créer la couche de marqueurs
    this.markersLayer = new VectorLayer({
      source: markersSource,
      style: (feature) => {
        return this.createMarkerStyle(feature);
      }
    });

    // Créer la carte OpenLayers
    this.map = new Map({
      target: 'map',
      layers: [
        // Couche de tuiles OpenStreetMap
        new TileLayer({
          source: new OSM()
        }),
        // Couche des marqueurs
        this.markersLayer
      ],
      view: new View({
        center: fromLonLat([2.3522, 48.8566]), // Paris (longitude, latitude)
        zoom: 16,
        minZoom: 14,
        maxZoom: 19
      }),
      controls: defaultControls({
        attribution: false,
        rotate: false
      })
    });

    // Ajouter les popups pour les marqueurs
    const container = document.getElementById('popup');
    if (container) {
      this.popup = new Overlay({
        element: container,
        autoPan: {
          animation: {
            duration: 250
          }
        }
      });
      this.map.addOverlay(this.popup);

      // Ajouter un gestionnaire d'événement pour le bouton de fermeture
      const closer = document.getElementById('popup-closer');
      if (closer) {
        closer.onclick = () => {
          if (this.popup) {
            this.popup.setPosition(undefined);
          }
          closer.blur();
          return false;
        };
      }
    }

    // Ajouter un gestionnaire d'événement pour le clic sur la carte
    this.map.on('click', (evt) => {
      const feature = this.map.forEachFeatureAtPixel(evt.pixel, (feature) => {
        return feature;
      });

      if (feature) {
        const placeId = feature.get('id');
        const place = this.places.find(p => p.id === placeId);
        if (place) {
          this.selectedPlace = place;

          // Remplir le contenu du popup
          const content = document.getElementById('popup-content');
          if (content && this.popup) {
            // Créer le contenu HTML pour le popup
            let html = `<h3>${place.name}</h3>`;
            html += `<p class="category">${this.getCategoryLabel(place.category)}</p>`;

            if (place.description) {
              html += `<p class="description">${place.description}</p>`;
            }

            if (place.openingTime && place.closingTime) {
              html += `<p class="hours">Ouvert: ${place.openingTime} - ${place.closingTime}</p>`;
            }

            content.innerHTML = html;

            // Positionner le popup à la géométrie du feature
            const geometry = feature.getGeometry();
            if (geometry) {
              const coordinate = geometry.getType() === 'Point'
                ? (geometry as Point).getCoordinates()
                : evt.coordinate;
              this.popup.setPosition(coordinate);
            }
          }
        }
      } else {
        // Si on clique ailleurs, on cache le popup
        if (this.popup) {
          this.popup.setPosition(undefined);
        }
      }
    });

    // Ajouter les marqueurs à la carte
    this.addMarkersToMap();

    // Marquer le chargement comme terminé
    this.isLoading = false;
  }

  loadPlaces(): void {
    // Pour l'exemple, utilisons des données fictives
    this.places = [
      {
        id: 1,
        name: 'Scène Heisei',
        category: 'scene',
        latitude: 48.8566,
        longitude: 2.3522,
        description: 'Scène principale du festival où se produisent les têtes d\'affiche.',
      },
      {
        id: 2,
        name: 'Scène Reiwa',
        category: 'scene',
        latitude: 48.8570,
        longitude: 2.3526,
        description: 'Scène dédiée aux artistes émergents et aux performances intimistes.',
      },
      {
        id: 3,
        name: 'Night Market',
        category: 'food',
        latitude: 48.8560,
        longitude: 2.3515,
        description: 'Zone de restauration avec divers stands de cuisine japonaise.',
        openingTime: '19:00',
        closingTime: '23:00'
      },
      {
        id: 4,
        name: 'Night Market',
        category: 'drink',
        latitude: 48.8562,
        longitude: 2.3530,
        description: 'Bar servant des boissons et cocktails japonais.',
        openingTime: '12:00',
        closingTime: '00:00'
      },
      {
        id: 5,
        name: 'Toilettes Nord',
        category: 'toilet',
        latitude: 48.8568,
        longitude: 2.3510,
        description: 'Toilettes situées au nord du site.'
      },
      {
        id: 6,
        name: 'Poste de Secours',
        category: 'firstaid',
        latitude: 48.8565,
        longitude: 2.3535,
        description: 'Poste de premiers secours avec personnel médical.'
      },
      {
        id: 7,
        name: 'Entrée Principale',
        category: 'entrance',
        latitude: 48.8555,
        longitude: 2.3525,
        description: 'Entrée principale du festival avec contrôle des billets.',
        openingTime: '14:30',
        closingTime: '23:00'
      }
    ];

    // Ajouter les marqueurs si la carte est déjà initialisée
    if (this.map) {
      this.addMarkersToMap();
    }
  }

  addMarkersToMap(): void {
    if (!this.markersLayer) return;

    // Vider la source de données
    const source = this.markersLayer.getSource();
    if (source) {
      source.clear();
    }

    // Filtrer les lieux selon la catégorie sélectionnée
    const placesToShow = this.selectedCategory === 'all'
      ? this.places
      : this.places.filter(place => place.category === this.selectedCategory);

    // Créer un feature pour chaque lieu
    const features = placesToShow.map(place => new Feature({
      geometry: new Point(fromLonLat([place.longitude, place.latitude])),
      name: place.name,
      category: place.category,
      id: place.id
    }));

    // Ajouter les features à la source
    if (source) {
      source.addFeatures(features);
    }

    // Ajuster la vue pour afficher tous les marqueurs
    if (features.length > 0) {
      this.fitMapToMarkers();
    }
  }

  // Modification de la signature de la méthode pour accepter FeatureLike au lieu de Feature
  createMarkerStyle(feature: FeatureLike): Style {
    const category = feature.get('category');

    // Obtenir la couleur associée à la catégorie
    const legendItem = this.legendItems.find(item => item.category === category);
    const color = legendItem ? legendItem.color : '#EC4899'; // Rose par défaut

    // Emoji correspondant à la catégorie
    let emoji = '📍';
    switch (category) {
      case 'scene':
        emoji = '🎵';
        break;
      case 'food':
        emoji = '🍱';
        break;
      case 'drink':
        emoji = '🍹';
        break;
      case 'toilet':
        emoji = '🚻';
        break;
      case 'firstaid':
        emoji = '🩹';
        break;
      case 'entrance':
        emoji = '🚪';
        break;
    }

    // Créer le style du marqueur
    return new Style({
      image: new CircleStyle({
        radius: 12,
        fill: new Fill({
          color: color
        }),
        stroke: new Stroke({
          color: '#ffffff',
          width: 2
        })
      }),
      text: new Text({
        text: emoji,
        font: '14px sans-serif',
        offsetY: 1,
        fill: new Fill({
          color: '#ffffff'
        })
      })
    });
  }

  fitMapToMarkers(): void {
    if (!this.markersLayer || !this.map) return;

    const source = this.markersLayer.getSource();
    if (source && source.getFeatures().length > 0) {
      const extent = source.getExtent();
      this.map.getView().fit(extent, {
        padding: [50, 50, 50, 50],
        maxZoom: 17
      });
    }
  }

  onCategoryChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedCategory = select.value;
    this.filterMarkers();
  }

  filterMarkers(): void {
    this.addMarkersToMap();
  }

  centerOnUserLocation(): void {
    if (!this.map) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords = fromLonLat([position.coords.longitude, position.coords.latitude]);

          // Centre la carte sur la position de l'utilisateur
          this.map.getView().animate({
            center: userCoords,
            zoom: 18,
            duration: 500
          });

          // Ajoute un marqueur pour la position de l'utilisateur
          const userFeature = new Feature({
            geometry: new Point(userCoords),
            name: 'Votre position'
          });

          // Style pour le marqueur de l'utilisateur
          userFeature.setStyle(new Style({
            image: new CircleStyle({
              radius: 8,
              fill: new Fill({
                color: '#4338CA'
              }),
              stroke: new Stroke({
                color: '#FFFFFF',
                width: 2
              })
            })
          }));

          // Ajoute le marqueur à une nouvelle couche temporaire
          const userLayer = new VectorLayer({
            source: new VectorSource({
              features: [userFeature]
            })
          });

          this.map.addLayer(userLayer);

          // Supprime le marqueur après 10 secondes
          setTimeout(() => {
            this.map.removeLayer(userLayer);
          }, 10000);
        },
        (error) => {
          console.error('Erreur de géolocalisation:', error);
          alert('Impossible de vous localiser. Veuillez autoriser l\'accès à votre position.');
        }
      );
    } else {
      alert('La géolocalisation n\'est pas prise en charge par votre navigateur.');
    }
  }

  getCategoryLabel(category: string): string {
    const item = this.legendItems.find(item => item.category === category);
    return item ? item.label : 'Autre';
  }
}

