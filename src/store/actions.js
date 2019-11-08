import axios from 'axios';
import { API_BASE_URL, UPDATE_LEADERSHIP_DATA } from './constants';

const getLeadershipData = (dispatch) => {
  axios.get(`${API_BASE_URL}/leadership`)
    .then(response => {
      dispatch({ type: UPDATE_LEADERSHIP_DATA, leadershipData: response.data })
    })
    .catch(error => {
      console.error(error);
    })
}

export {
  getLeadershipData
};
