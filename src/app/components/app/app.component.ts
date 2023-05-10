import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hr_app';
  currentUser?: User;

  onUserSelected(user: User) {
    this.currentUser = user;
  }
}
