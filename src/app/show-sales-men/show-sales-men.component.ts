import { Component, OnInit } from '@angular/core';
import { FoodHubApiService } from '../food-hub-api.service';
import { SalesMan } from '../sales-man';

@Component({
  selector: 'app-show-sales-men',
  templateUrl: './show-sales-men.component.html',
  styleUrls: ['./show-sales-men.component.css']
})
export class ShowSalesMenComponent implements OnInit {
  salesMenList: SalesMan[];

  constructor(private service: FoodHubApiService) { }

  ngOnInit() {
    this.service.findAllSalesmen().subscribe(resp => this.salesMenList = resp);
  }

}
