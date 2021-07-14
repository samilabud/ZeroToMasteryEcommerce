import { takeLatest, put, all, call} from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import {clearCart} from './cart.actions';

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* clearCartOnSignOut(){
    yield put(clearCart());
}

//Magic
export function* cartSagas(){
    yield all([
            call(onSignOutSuccess)
        ]);
}