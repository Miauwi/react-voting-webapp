import {
  LOCAL_LOGIN_USER,
  LOCAL_LOGIN_SUCCESS_USER,
  LOGIN_SUCCESS_USER,
  LOGIN_ERROR_USER,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  EMAIL_SIGNUP_COMPLETE,
  POST_CLEAR_STATE
} from 'constants/index';
import {
  CREATE_POST, CREATE_POST_REQUEST,CREATE_POST_ERROR,CREATE_POST_SUCCESS
} from 'actions/posts';


export default function ui(state={
  isWaiting: false,
  messageOpen: false,
  message: null,
  selectedPort: 'top'
  }, action={}) {
  switch (action.type) {
    case LOGOUT_USER_REQUEST:
    case CREATE_POST_REQUEST:
      return Object.assign({}, state, {
        isWaiting: true
      });
     case LOGOUT_USER_SUCCESS:
     case LOGOUT_USER_ERROR:
     case CREATE_POST_SUCCESS:
     case CREATE_POST_ERROR:
      return Object.assign({}, state, {
        isWaiting: false
      });
    default:
      return state;
  }
}
