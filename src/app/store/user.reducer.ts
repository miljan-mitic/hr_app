import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import { loadUsersSuccess, selectUser } from './user.actions';

export interface State {
  users: User[];
  selectedUserId: number;
}

export const initialState: State = {
  users: [],
  selectedUserId: -1,
};

export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, props) => {
    const {users} = props;
    return {...state, users: users};
    // state.users = users; // Nikako!
    // return state; // Nikako!
  }),
  on(selectUser, (state, user) => {
    return {...state, selectedUserId: user.id};
    // state.selectedUserId = user.id; // Nikako!
    // return state; // Nikako!
  })
);
