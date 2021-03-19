import moxios from 'moxios';
import { storeFactory } from '../../test/testUtils';
import { actionTypes, correctGuess, getSecretWord } from './';

describe('correctGuess', () => {
  test('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    // ToBe is for immutable types, toEqual and toStrictEqual are for objects and arrays.
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    // This return statement is necessary, otherwise the test completes before the promise resolves
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
