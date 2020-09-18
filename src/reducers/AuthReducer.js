import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LONGIN_USER,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case LONGIN_USER:
      console.log('AuthReducer, LONGIN_USER');
      return {...state, loading: true, error: ''};

    case EMAIL_CHANGED:
      console.log('AuthReducer, EMAIL_CHANGED');
      return {...state, email: action.payload};

    case LOGIN_USER_SUCCESS:
      console.log('AuthReducer, LOGIN_USER_SUCCESS');
      return {...state, ...INITIAL_STATE, user: action.payload};

    case LOGIN_USER_FAIL:
      console.log('AuthReducer, LOGIN_USER_FAIL');
      return {
        ...state,
        error: 'Authentication Failed',
        password: '',
        loading: false,
      };

    case PASSWORD_CHANGED:
      console.log('AuthReducer, PASSWORD_CHANGED');
      return {...state, password: action.payload};
    default:
      return state;
  }
};
