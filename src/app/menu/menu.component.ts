import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/link';
import { CommunicationService } from '../communication.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

@Input() navLinks: Link[];

  showLogout = false;
  showLogin = true;
  constructor(private service:CommunicationService) { }

  ngOnInit() {

    this.service.currentMessage.subscribe(msg => {
       
      if(msg === 'logged'){
        this.showLogout = true;
        this.showLogin = false;
      }
    });
  }

  showDetails(event: Event) {
    console.log('showDetails() called');
    event.preventDefault();
  }
}
