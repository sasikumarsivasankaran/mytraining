import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { CompAdderService } from 'src/app/comp-adder.service';
import { PaymentComponent } from 'src/app/payment/payment.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @ViewChild('placeHolder', {read: ViewContainerRef}) placeHolderRef: ViewContainerRef;
  item: string;
  cart: string[] = [];
  isDisabled = true;
  msg: string;
  constructor(private service: CompAdderService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cart.push(this.item);
    this.item = '';
    this.isDisabled = true;
    
      this.service.setViewRef(this.placeHolderRef);
      this.service.addComponent(PaymentComponent);
    
  }

  change() {
    this.isDisabled = false;
  }

  onChange(val){
    this.msg = val;
  }
}
