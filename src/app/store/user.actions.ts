import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const loadUsers = createAction('LOAD USERS');

export const loadUsersSuccess = createAction(
  'LOAD USERS',
  props<{
    users: User[];
  }>()
);

export const selectUser = createAction('SELECT USER', props<User>());
