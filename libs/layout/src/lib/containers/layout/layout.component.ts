import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '@dc/auth';
import { User } from '@dc/models';

@Component({
  selector: 'dc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(public authService: AuthService) {}
}
