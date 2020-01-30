import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  constructor() {
  }

  newsfeed = [
    {
      name: 'Vishal',
      img: 'http://source.unsplash.com/collection/9263445'
    },
    {
      name: 'Vijay',
      img: 'http://source.unsplash.com/collection/9263455'
    },
    {
      name: 'Vishnu',
      img: 'http://source.unsplash.com/collection/9263695'
    },
    {
      name: 'Selva',
      img: 'http://source.unsplash.com/collection/9253495'
    },
    {
      name: 'Nirmal',
      img: 'http://source.unsplash.com/collection/9263495'
    },
    {
      name: 'Rose',
      img: 'http://source.unsplash.com/collection/9253465'
    },
    {
      name: 'Linga',
      img: 'http://source.unsplash.com/collection/9203495'
    }
  ];



}
