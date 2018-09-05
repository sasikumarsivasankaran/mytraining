import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/link';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
logo = 'assets/images/logo.jpg';
title = 'Food Hub';
pageLinks: Link[] = [
    {linkRef: 'home', linkText: 'Home'},
    {linkRef: 'restaurants', linkText: 'Restaurants'},
    {linkRef: 'cuisine', linkText: 'Cuisine'},
    {linkRef: 'history', linkText: 'History'},
    {linkRef: 'order', linkText: 'Order'},
    {linkRef: 'salesmen', linkText: 'Sales Team'},
];
  constructor() { }

  ngOnInit() {
  }
  
}
