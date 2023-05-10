import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, of, tap } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input()
  user?: User;

  constructor(private store: Store<AppState>) {}

  userId$: Observable<number> = of(-1);

  ngOnInit(): void {
    this.userId$ = this.store.pipe(
      // tap((state)  => {
      //   console.log('User ID', state);
      // }),
      map((state) => state.users.selectedUserId)
    );
  }
}
