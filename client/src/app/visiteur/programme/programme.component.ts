import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

interface FestivalEvent {
  id: number;
  day: 'samedi' | 'dimanche';
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  scene: 'Heisei' | 'Reiwa' | 'Kawaii Zone';
  category: 'concert' | 'dj set' | 'atelier' | 'animation' | 'shopping' | 'rencontre' | 'food' | 'cérémonie';
  longDescription?: string;
  artistName?: string;
  artistImage?: string;
  socialLinks?: { platform: string; url: string }[];
  videoUrl?: string;
  setlist?: string[];
}

interface InfoPratique {
  title: string;
  items: string[];
}

const GET_ALL_EVENTS = gql`
  query queryEvents {
    getAllEvent {
      eventId
      eventName
      startTime
      endTime
      description
      longDescription
      categorie
      artiste {
        nom
        urlArtistImage
        urlSocialMedia
      }
      scene {
        name
      }
    }
  }
`;

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
})
export class ProgrammeComponent implements OnInit {
  events: FestivalEvent[] = [];
  filteredEvents: FestivalEvent[] = [];
  selectedEvent: FestivalEvent | null = null;
  isDetailModalOpen = false;

  filter = {
    day: 'all',
    scene: 'all',
    startTime: 'all',
    category: 'all',
    search: ''
  };

  isMenuOpen = false;

  infoPratiques: InfoPratique[] = [
    {
      title: "Horaires d'ouverture",
      items: [
        'Ouverture des portes : 14h30',
        'Début des concerts : 15h30',
        'Fermeture : 02h00'
      ]
    },
    {
      title: "Services disponibles",
      items: [
        'Consigne pour effets personnels (jusqu\'à 01h30)',
        'Points d\'eau gratuits',
        'Stands de nourriture et boissons',
        'Poste de premiers secours 24h/24'
      ]
    }
  ];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    console.log('Début de loadEvents()');
    this.apollo.watchQuery({
      query: GET_ALL_EVENTS
    }).valueChanges.subscribe({
      next: (result: any) => {
        console.log('Réponse brute complète:', result);
        console.log('Données getAllEvent:', result.data?.getAllEvent);
        this.events = this.mapBackendToFrontend(result.data.getAllEvent);
        console.log('Événements après mapping:', this.events);
        this.applyFilters();
      },
      error: (error: any) => {
        console.error('Erreur GraphQL:', error);
      }
    });
  }

  private mapBackendToFrontend(backendEvents: any[]): FestivalEvent[] {
    return backendEvents.map((event) => ({
      id: event.eventId,
      day: this.determineDay(event.startTime),
      name: event.eventName || event.artist?.nom || 'Événement sans nom',
      description: event.description || 'Aucune description',
      artistName: event.artiste?.nom ||
      startTime: this.formatTime(event.startTime),
      endTime: this.formatTime(event.endTime),
      scene: this.mapSceneName(event.scene?.name),
      category: this.mapCategory(event.categorie),
      longDescription: event.longDescription,
      artistImage: event.artiste?.urlArtistImage ? `/assets/images/${event.artiste.urlArtistImage}` : undefined,
      socialLinks: event.artiste?.urlSocialMedia ? [
        { platform: 'Social', url: `http://socialmedia/${event.artiste.urlSocialMedia}` }
      ] : undefined
    }));
  }

  private formatTime(dateTime: string): string {
    if (!dateTime) return '00:00';
    if (dateTime.includes('T')) {
      return dateTime.split('T')[1].substring(0, 5);
    }
    return dateTime;
  }

  private determineDay(startTime: string): 'samedi' | 'dimanche' {
    if (!startTime || !startTime.includes('T')) return 'samedi';
    const date = new Date(startTime);
    return date.getDay() === 0 ? 'dimanche' : 'samedi';
  }

  private mapCategory(backendCategory: string): FestivalEvent['category'] {
    const categoryMap: Record<string, FestivalEvent['category']> = {
      'CONCERT': 'concert',
      'DJ_SET': 'dj set',
      'ATELIER': 'atelier',
      'ANIMATION': 'animation',
      'SHOPPING': 'shopping',
      'RENCONTRE': 'rencontre',
      'FOOD': 'food',
      'CEREMONIE': 'cérémonie'
    };
    return categoryMap[backendCategory] || 'concert';
  }

  private mapSceneName(sceneName: string): 'Heisei' | 'Reiwa' | 'Kawaii Zone' {
    if (!sceneName) return 'Heisei';
    const sceneMap: Record<string, 'Heisei' | 'Reiwa' | 'Kawaii Zone'> = {
      'Heisei': 'Heisei',
      'Reiwa': 'Reiwa',
      'Kawaii Zone': 'Kawaii Zone'
    };
    return sceneMap[sceneName] || 'Heisei';
  }

  applyFilters(): void {
    let result = this.events;

    if (this.filter.day !== 'all') {
      result = result.filter(event => event.day === this.filter.day);
    }
    if (this.filter.scene !== 'all') {
      result = result.filter(event => event.scene === this.filter.scene);
    }
    if (this.filter.category !== 'all') {
      result = result.filter(event => event.category === this.filter.category);
    }
    if (this.filter.startTime !== 'all') {
      result = result.filter(event => event.startTime === this.filter.startTime);
    }
    if (this.filter.search) {
      const searchLower = this.filter.search.toLowerCase();
      result = result.filter(event =>
        event.name.toLowerCase().includes(searchLower) ||
        event.description.toLowerCase().includes(searchLower)
        (event.artistName?.toLowerCase().includes(searchLower) ?? false)
      );
    }

    this.filteredEvents = result;
  }

  openEventDetail(event: FestivalEvent): void {
    this.selectedEvent = event;
    this.isDetailModalOpen = true;
  }

  closeEventDetail(): void {
    this.isDetailModalOpen = false;
    setTimeout(() => this.selectedEvent = null, 300);
  }

  handleFilterChange(event: any): void {
    const { name, value } = event.target;
    this.filter = { ...this.filter, [name]: value };
    this.applyFilters();
  }

  resetFilters(): void {
    this.filter = {
      day: 'all',
      scene: 'all',
      startTime: 'all',
      category: 'all',
      search: ''
    };
    this.applyFilters();
  }

  getSceneColor(scene: string | undefined | null): string {
    if (!scene) return 'bg-gray-200';
    switch(scene) {
      case 'Heisei': return 'bg-pink-200';
      case 'Reiwa': return 'bg-purple-200';
      case 'Kawaii Zone': return 'bg-orange-200';
      default: return 'bg-gray-200';
    }
  }

  getCategoryIcon(category: string | undefined | null): string {
    if (!category) return '✨';
    const icons: Record<string, string> = {
      'concert': '🎵',
      'dj set': '🎧',
      'atelier': '🧵',
      'animation': '🎭',
      'shopping': '🛍️',
      'rencontre': '👋',
      'food': '🍱',
      'cérémonie': '🥁'
    };
    return icons[category] || '✨';
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get timeSlots(): string[] {
    return [...new Set(this.events.map(event => event.startTime))].sort();
  }

  get scenes(): string[] {
    return [...new Set(this.events.map(event => event.scene))];
  }

  get categories(): string[] {
    return [...new Set(this.events.map(event => event.category))];
  }
}
