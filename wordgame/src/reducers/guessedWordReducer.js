import { actionTypes } from '../actions';

/**
 * @function guessedWordReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {array} - new guessedWords state.
 */
const guessedWordReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default guessedWordReducer;
