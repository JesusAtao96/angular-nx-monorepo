import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Authenticate } from '@dc/models';

import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { State } from '@dc/models';
import { login } from '../../+state/auth.actions';

@Component({
  selector: 'dc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnDestroy {
  subscription: Subscription = new Subscription();
  // private unsubscribe$!: Subject<void>;

  constructor(private store: Store<State>) {}

  login(auth: Authenticate):void {
    /* .pipe(
      takeUntil(this.unsubscribe$)
    ) */
    console.log(auth);
    // this.subscription = this.authService.login(auth).subscribe();
    this.store.dispatch(login({ payload: auth }));

  }

  ngOnDestroy() {
    // Unsubscribe forma 1
    this.subscription.unsubscribe();

    // Unsubscribe forma 2
    /* this.unsubscribe$.next();
    this.unsubscribe$.complete(); */
  }

}
