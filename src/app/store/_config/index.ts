import { storeLogger } from 'ngrx-store-logger';
import { ActionReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export function logger(reducer: ActionReducer<any>): any {
  // Default, no options
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];
