import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { loadUsers, selectUser } from 'src/app/store/user.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  constructor(private usersService: UsersService, private store: Store<AppState>) {}

  // @Output()
  // userSelected: EventEmitter<User> = new EventEmitter<User>();

  public users: User[] = [];

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.usersService.getAll().subscribe((newUsers) => {
      this.users = newUsers;
    });
  }

  onUserSelect(user: User) {
    console.log('Selektovan je', user);
    //this.userSelected.emit(user);
    this.store.dispatch(selectUser(user));
  }
}
