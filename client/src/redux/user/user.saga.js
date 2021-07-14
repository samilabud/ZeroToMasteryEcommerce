import { takeLatest, put, all, call} from 'redux-saga/effects';

import UserActionTypes from './user.types';
import {SignInFailure, SignInSuccess, signoutFailure, signoutSuccess, signupFailure, signupSuccess} from './user.actions';

import {auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../fireabase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData)  {
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(SignInSuccess({id:userSnapshot.id, ...userSnapshot.data()}));
    }catch(error){
        yield put(SignInFailure(error));
    }
}

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    }catch(error){
        yield put(SignInFailure(error));
    }
}

export function* signInWithEmail({payload:{email,password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);
    }catch(error){
        yield put(SignInFailure(error));
    }
}
export function* signInAterSingUp({payload:{user, additionalData}}){
    yield getSnapshotFromUserAuth(user,additionalData);
}
//signup
export function* signupUser({payload:{displayName, email,password}}){
    try{
            const {user} = yield auth.createUserWithEmailAndPassword(email, password);
            yield createUserProfileDocument(user, {displayName});
            yield put(signupSuccess({user,additionalData:{displayName}}));

    }catch(error){
        yield put(signupFailure(error));
    }

}
export function* onSignupUser(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signupUser)
}

export function* onSignupSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAterSingUp)
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signoutUser)
}


export function* isUserAuthenticated(){
    try{
        const userAuth = getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);


    }catch(error){
        yield put(SignInFailure(error));
    }
}

export function* signoutUser(){
    try{
        yield auth.signOut();
        yield put(signoutSuccess())
    }catch(error){
        yield put(signoutFailure(error));
    }
}


//Magic
export function* userSagas(){
    yield all([
            call(onGoogleSignInStart),
            call(onEmailSignInStart),
            call(onCheckUserSession),
            call(onSignOutStart),
            call(onSignupUser),
            call(onSignupSuccess)
        ]);
}
