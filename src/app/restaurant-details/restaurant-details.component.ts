import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  info: string;
  details = new Map<string, string>();
  constructor(private route: ActivatedRoute) {
    this.details.set('101', 'Rain Tree');
    this.details.set('102', 'Murugan');
   }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const restCode = param['code'];
      this.info = this.details.get(restCode);
    });

  }

}
