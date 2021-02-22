import { AuthActionTypes, AuthAction } from '../actions/auth.actions';
import IAuth from '../models/auth.model';

export interface AuthState {
  user: IAuth[],
  loading: boolean,
  error: string | any
}

const initialState: AuthState = {
  user: [],
  loading: false,
  error: ""
}

export function authReducer(state: AuthState = initialState, action: AuthAction) {
  switch (action.type) {

    case AuthActionTypes.SIGN_IN:
      return {
        ...state,
        loading: true
      }
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: [action.payload, ...state.user],
        loading: false
      }
    case AuthActionTypes.SIGN_IN_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case AuthActionTypes.SIGN_UP:
      return {
        ...state,
        loading: true
      }
    case AuthActionTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        user: [action.payload, ...state.user],
        loading: false
      };
    }
    case AuthActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        loading: true
      }
    case AuthActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case AuthActionTypes.LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
}
