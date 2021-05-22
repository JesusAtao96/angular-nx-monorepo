import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Authenticate } from '@dc/models';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'dc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  login(auth: Authenticate):void {
    console.log(auth);
    this.authService.login(auth)
      .subscribe(
        (response) => {
          console.log('response', response);
        }
      );
  }

}
