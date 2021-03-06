import initialState from './initialState';
import * as constants from './constants';

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case constants.UPDATE_CURRENT_PAGE_TITLE:
      newState.currentPageTitle = action.currentPageTitle;
      break;

    case constants.UPDATE_LEADERSHIP_DATA:
      newState.leadershipData = action.leadershipData;
      break;

    case constants.UPDATE_LEADERSHIP_API_ERROR:
      newState.leadershipApiError = action.error;
      break;

    default:
      break;
  }

  return newState;
};

export default reducer;
