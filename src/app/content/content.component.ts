import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
restaurantList: Restaurant[] = [
  {id: 101, name: 'Rain Tree', location: 'Chennai', rating: 4.5},
  {id: 102, name: 'Murugan Idly', location: 'Madurai', rating: 4},
  {id: 103, name: 'Sangeetha', location: 'Adyar', rating: 3.5},
  {id: 104, name: 'Dhaba P  oint', location: 'Nandanam', rating: 4.5},
  {id: 105, name: 'Saravana Bhavan', location: 'Velachery', rating: 3}
];
  constructor() { }

  ngOnInit() {
  }

}
