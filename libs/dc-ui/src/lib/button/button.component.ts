import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Styles, User } from '@dc/models';

@Component({
  selector: 'dc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text = 'Click me!';
  @Input() style: Styles = 'danger';
  @Input() visible = true;

  @Output() clicked = new EventEmitter<Partial<User>>();

  notify() {
    const user: Partial<User> = {
      username: 'admin'
    };

    this.clicked.emit(user);
  }
}
