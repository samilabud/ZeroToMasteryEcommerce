import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null
  };
  
  export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UserActionTypes.SIGN_IN_SUCCESS:
      case UserActionTypes.SIGN_UP_SUCCESS:
        return {
          ...state,
          currentUser: action.payload && action.payload.id!=='undefined' ? action.payload : null,
          error: null
        };
      case UserActionTypes.SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser: null,
          error: null
        };
      case UserActionTypes.SIGN_IN_FAILURE:
      case UserActionTypes.SIGN_OUT_FAILURE:
        return {
          ...state,
          signInError: action.payload
        };
      
      case UserActionTypes.SIGN_UP_FAILURE:
        return {
          ...state,
          signUpError: action.payload
        };

      default:
        return state;
    }
  };
  
  export default userReducer;