import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  item: string;
  cart: string[] = [];
  isDisabled = true;
  msg: string;
  constructor() { }

  ngOnInit() {
  }

  addToCart() {
    this.cart.push(this.item);
    this.item = '';
    this.isDisabled = true;

  }

  change() {
    this.isDisabled = false;
  }

  onChange(val){
    this.msg = val;
  }
}
