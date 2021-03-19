import { actionTypes } from '../actions';

/**
 * @function successReducer
 * @param {array} state - Boolean to indicate if the word has successfully been guessed.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success state.
 */
const successReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};

export default successReducer;
