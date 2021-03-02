import {
  EntityMetadataMap,
  DefaultDataServiceConfig,
  EntityDataModuleConfig
} from '@ngrx/data';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { PhotoEffects } from '../effects/photo.effects';
import { UserEffects } from '../effects/user.effects';
import { PhotoReducer, PhotoState } from '../reducers/photo.reducer';
import { UserReducer, UserState } from '../reducers/user.reducer';


export interface AppState {
  user: UserState;
  photo: PhotoState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: UserReducer,
  photo: PhotoReducer
};

export function debug(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function (state, action) {
    const newState = reducer(state, action);
    console.log(`[DEBUG] action: ${action.type}`, {
      payload: (<any>action).payload,
      oldState: state,
      newState
    });
    return newState;
  };
}

export const metaReducers = environment.production ? [] : [debug];


export const effects = [UserEffects, PhotoEffects];

export const entityMetadata: EntityMetadataMap = {
  Post: {},
  Github: {},
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.baseUrl,
  entityHttpResourceUrls: {
    FooBar: {
      entityResourceUrl: environment.baseUrl + '/comments',
      collectionResourceUrl: environment.baseUrl + '/comments'
    }
  }
};
