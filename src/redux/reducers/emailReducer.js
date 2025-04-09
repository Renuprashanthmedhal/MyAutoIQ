import { FETCH_EMAILS_REQUEST, FETCH_EMAILS_SUCCESS, FETCH_EMAILS_FAILURE, TOGGLE_EMAIL_DETAILS } from '../types';

const initialState = {
  emails: [],
  loading: false,
  error: null,
  expandedEmailId: null
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_EMAILS_SUCCESS:
      return { ...state, loading: false, emails: action.payload };
    case FETCH_EMAILS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case TOGGLE_EMAIL_DETAILS:
      return { 
        ...state, 
        expandedEmailId: state.expandedEmailId === action.payload ? null : action.payload 
      };
    default:
      return state;
  }
};

export default emailReducer;