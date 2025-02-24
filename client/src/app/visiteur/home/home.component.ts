import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  artists = [
    {
      name: 'Neon Sakura',
      image: '/assets/images/groupe1.jpg'
    },
    {
      name: 'Dream Paradise',
      image: '/assets/images/groupe2.jpg'
    },
    {
      name: 'Starlight Fever',
      image: '/assets/images/groupe3.jpg'
    },
    {
      name: 'Miracle Spark',
      image: '/assets/images/groupe4.jpg'
    }
  ];
}
