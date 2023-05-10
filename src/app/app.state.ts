import { State as UsersState } from "./store/user.reducer"

export interface AppState {
  users: UsersState
}