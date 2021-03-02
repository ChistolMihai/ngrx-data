import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

const getUserState = createFeatureSelector('user');

export const getUsers = createSelector(
  getUserState,
  (state: UserState) => Object.values(state.entities)
);
