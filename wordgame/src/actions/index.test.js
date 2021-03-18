import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
  test('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    // ToBe is for immutable types, toEqual and toStrictEqual are for objects and arrays.
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
