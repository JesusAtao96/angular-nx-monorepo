import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Authenticate } from '@dc/models';

@Component({
  selector: 'dc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  login(auth: Authenticate):void {
    console.log(auth);
  }

}
