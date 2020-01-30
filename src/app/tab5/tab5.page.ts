import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  newsfeed = [
    {
      name: 'Coda',
      img: 'http://source.unsplash.com/collection/9263445'
    },
    {
      name: 'Pongal',
      img: 'http://source.unsplash.com/collection/9263455'
    },
    {
      name: 'Beach',
      img: 'http://source.unsplash.com/collection/9263695'
    },
    {
      name: 'Hotel',
      img: 'http://source.unsplash.com/collection/9253495'
    },
    {
      name: 'Diwali',
      img: 'http://source.unsplash.com/collection/9263495'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }




}
