import {
  EntityMetadataMap,
  DefaultDataServiceConfig,
  EntityDataModuleConfig
} from '@ngrx/data';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
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

export function logger(reducer: ActionReducer<any>) {
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];


export const effects = [UserEffects, PhotoEffects];

export const entityMetadata: EntityMetadataMap = {
  Post: {},
  Comment: {},
  Github: {},
  Todo: {},
  FooBar: {}
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
