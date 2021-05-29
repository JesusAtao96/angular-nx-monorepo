import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Authenticate } from '@dc/models';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'dc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnDestroy {
  subscription!: Subscription;

  constructor(private authService: AuthService) {}

  login(auth: Authenticate):void {
    console.log(auth);
    this.subscription = this.authService.login(auth)
      .subscribe(
        (response) => {
          console.log('response', response);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
