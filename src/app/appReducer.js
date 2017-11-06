import {
  PRESENT_URL,
} from './appActionTypes';

const initialState = {
  present_url: '/',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRESENT_URL:
      return {present_url: action.url};
    default: return state;
  }
}
