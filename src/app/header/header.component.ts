import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/link';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// logo = 'assets/images/logo.jpg';
logo = 'assets/images/rest.jpg';
title = 'Food Hub';
pageLinks: Link[] = [   
    {linkRef: 'restaurant', linkText: 'Restaurants'},
    {linkRef: 'salesMen', linkText: 'Sales Team'},
    {linkRef: 'items', linkText: 'items'},
    {linkRef: 'orders', linkText: 'Order'},
    {linkRef: 'login', linkText: 'Login'},
];
  constructor() { }

  ngOnInit() {
  }
  
}
