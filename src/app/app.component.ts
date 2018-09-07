import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  encapsulation: ViewEncapsulation.Native // To apply child element css
  encapsulation: ViewEncapsulation.Emulated // To not apply child css style
})
export class AppComponent {
  title = ' app food hub';
  location = 'Chennai';
}
