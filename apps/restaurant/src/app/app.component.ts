import { Component } from '@angular/core';
import { TOTAL } from '@dc/ui';

@Component({
  selector: 'dc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'restaurant';
  total = TOTAL;
}
