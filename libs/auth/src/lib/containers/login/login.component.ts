import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Authenticate } from '@dc/models';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'dc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnDestroy {
  subscription!: Subscription;
  private unsubscribe$!: Subject<void>;

  constructor(private authService: AuthService) {}

  login(auth: Authenticate):void {
    console.log(auth);
    this.subscription = this.authService.login(auth)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(
        (response) => {
          console.log('response', response);
        }
      );
  }

  ngOnDestroy() {
    // Unsubscribe forma 1
    this.subscription.unsubscribe();

    // Unsubscribe forma 2
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
