import axios from 'axios';
import { API_BASE_URL, UPDATE_LEADERSHIP_DATA, UPDATE_LEADERSHIP_API_ERROR } from './constants';

const getLeadershipData = (dispatch) => {
  axios.get(`${API_BASE_URL}/leadership`)
    .then(response => {
      dispatch({ type: UPDATE_LEADERSHIP_DATA, leadershipData: response.data });
      dispatch({ type: UPDATE_LEADERSHIP_API_ERROR, error: {} })
    })
    .catch(error => {
      dispatch({ type: UPDATE_LEADERSHIP_API_ERROR, error: { status: error.response.status, message: error.response.data } })
      console.error(error);
    })
}

export {
  getLeadershipData
};
