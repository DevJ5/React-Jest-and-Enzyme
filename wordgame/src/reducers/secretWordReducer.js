import { actionTypes } from '../actions';

/**
 * @function guessedWordReducer
 * @param {string} state - Secret word.
 * @param {object} action - action to be reduced.
 * @returns {string} - new secret word state.
 */
const secretWordReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};

export default secretWordReducer;
