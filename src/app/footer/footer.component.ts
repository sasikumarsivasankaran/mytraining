import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
social: Link[] = [
  {linkRef: 'http://www.facebook.com', linkText: 'Facebook', cls: 'fa fa-facebook-official'},
  {linkRef: 'http://www.twitter.com', linkText: 'Twitter', cls: 'fa fa-twitter-square'}];

  constructor() { }

  ngOnInit() {
  }

}
