import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentImageIndex = 0;
  carouselInterval: any;
  isBrowser: boolean;

  carouselImages = [
    '/assets/images/accueil1.jpg',
    '/assets/images/accueil2.jpg',
    '/assets/images/accueil3.png',
    '/assets/images/accueil4.jpg',
    '/assets/images/accueil5.jpg'
  ];

  artists = [
    {
      name: 'Neon Samurai',
      image: '/assets/images/groupe1.jpg'
    },
    {
      name: 'Quantum Beats',
      image: '/assets/images/groupe2.jpg'
    },
    {
      name: 'Tokyo Pulse',
      image: '/assets/images/groupe3.jpg'
    },
    {
      name: 'DJ Sets',
      image: '/assets/images/groupe4.jpg'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Exécuter uniquement dans le navigateur, pas côté serveur
    if (this.isBrowser) {
      this.startCarouselInterval();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.stopCarouselInterval();
    }
  }

  startCarouselInterval() {
    if (this.isBrowser) {
      this.carouselInterval = setInterval(() => {
        this.nextImage();
      }, 5000); // Change d'image toutes les 5 secondes
    }
  }

  stopCarouselInterval() {
    if (this.isBrowser && this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  setImage(index: number) {
    this.currentImageIndex = index;
    // Redémarrer le timer lorsque l'utilisateur change manuellement l'image
    if (this.isBrowser) {
      this.stopCarouselInterval();
      this.startCarouselInterval();
    }
  }
}
