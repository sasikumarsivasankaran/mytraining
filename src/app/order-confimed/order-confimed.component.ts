import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-order-confimed',
  templateUrl: './order-confimed.component.html',
  styleUrls: ['./order-confimed.component.css']
})
export class OrderConfimedComponent implements OnInit {

  @Input() request: string[];
  @Output() response: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  confirm() {
  this.response.emit('Order confirmed for ' + this.request.length + ' items :' + this.request );
  }
}
