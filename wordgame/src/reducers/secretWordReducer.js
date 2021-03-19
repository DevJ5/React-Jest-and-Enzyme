import { actionTypes } from '../actions';

/**
 * @function guessedWordReducer
 * @param {string} state - Secret word.
 * @param {object} action - action to be reduced.
 * @returns {string} - new secret word state.
 */
const secretWordReducer = (state = 'par', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default secretWordReducer;
