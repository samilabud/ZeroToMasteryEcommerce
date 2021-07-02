import UserActionTypes from './user.types';

export const setCurrentUser = user =>({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})
//GOOGLE
export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

//EMAIL
export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

//BOTH /  GENERIC
export const SignInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload:user
});

export const SignInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload:error
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

//SignOut
export const signoutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})
export const signoutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signoutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})
//Signup
export const signupStart = emailAndPassword =>({
    type: UserActionTypes.SIGN_UP_START,
    payload: emailAndPassword
})
export const signupSuccess = ({user, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}

})
export const signupFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})