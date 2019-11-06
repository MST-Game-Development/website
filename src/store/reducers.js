import initialState from './initialState';
import * as constants from './constants';

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case constants.UPDATE_CURRENT_PAGE_TITLE:
      newState.currentPageTitle = action.currentPageTitle;
      break;
    
    default:
      break;
  }

  return newState;
};

export default reducer;
