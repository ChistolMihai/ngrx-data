import { Action } from '@ngrx/store';
import IAuth from '../models/auth.model';

export enum AuthActionTypes {
    SIGN_IN = '[AUTH] Sign In',
    SIGN_IN_SUCCESS = '[AUTH] Sign In Success',
    SIGN_IN_FAIL = '[AUTH] Sign In Fail',

    SIGN_UP = '[AUTH] Sign In',
    SIGN_UP_SUCCESS = '[AUTH] Sign In Success',
    SIGN_UP_FAIL = '[AUTH] Sign In Fail',

    LOGOUT = '[AUTH] Logout',
    LOGOUT_SUCCESS = '[AUTH] Logout Success',
    LOGOUT_FAIL = '[AUTH] Logout Fail',
}

/*
** Sign In
**/
export class SignInAction implements Action {
    readonly type = AuthActionTypes.SIGN_IN;
}

export class SignInSuccessAction implements Action {
    readonly type = AuthActionTypes.SIGN_IN_SUCCESS;
    constructor(public payload: IAuth[]){}
}

export class SignInFailAction implements Action {
    readonly type = AuthActionTypes.SIGN_IN_FAIL;
    constructor(public payload: any) {}
}

/*
** End - Sign In
**/


/*
** Sign Up
**/
export class SignUpAction implements Action {
    readonly type = AuthActionTypes.SIGN_UP;
    constructor(public payload: IAuth){}
}

export class SignUpSuccessAction implements Action {
    readonly type = AuthActionTypes.SIGN_UP_SUCCESS;
    constructor(public payload: IAuth){}
}

export class SignUpFailAction implements Action {
    readonly type = AuthActionTypes.SIGN_UP_FAIL;
    constructor(public payload: any){}
}

/*
** End - Sign Up
**/


/*
** Logout
**/
export class LogoutPostAction implements Action {
    readonly type = AuthActionTypes.LOGOUT;
    constructor(public payload: number){}
}

export class LogoutSuccessAction implements Action {
    readonly type = AuthActionTypes.LOGOUT_SUCCESS;
    constructor(public payload: string | any){}
}

export class LogoutFailAction implements Action {
    readonly type = AuthActionTypes.LOGOUT_FAIL;
    constructor(public payload: any){}
}

/*
** End - Logout
**/

export type AuthAction =
SignInAction |
SignInSuccessAction |
SignInFailAction |
SignUpAction |
SignUpSuccessAction |
SignUpFailAction |
LogoutPostAction |
LogoutSuccessAction |
LogoutFailAction
