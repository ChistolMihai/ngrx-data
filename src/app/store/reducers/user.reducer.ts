import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { UserActions } from '../actions/user.actions';
import { User } from '../../models/user.model';

export interface UserState extends EntityState<User> {}

const adapter = createEntityAdapter<User>();

export const initialUserState: UserState = adapter.getInitialState();

export const UserReducer = createReducer(
  initialUserState,
  on(UserActions.getAllSuccess, (state, action) =>
    adapter.setAll(action.payload, state)
  )
);
