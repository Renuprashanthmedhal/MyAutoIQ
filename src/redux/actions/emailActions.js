import { FETCH_EMAILS_REQUEST, FETCH_EMAILS_SUCCESS, FETCH_EMAILS_FAILURE, TOGGLE_EMAIL_DETAILS } from '../types';
import api from '../../services/api';

export const fetchEmails = () => async (dispatch) => {
  dispatch({ type: FETCH_EMAILS_REQUEST });
  try {
    const response = await api.getEmails();
    console.log(response)
    dispatch({ type: FETCH_EMAILS_SUCCESS, payload: response.data[0].campaigns });
  } catch (error) {
    dispatch({ type: FETCH_EMAILS_FAILURE, payload: error.message });
  }
};

export const toggleEmailDetails = (emailId) => ({
  type: TOGGLE_EMAIL_DETAILS,
  payload: emailId
});