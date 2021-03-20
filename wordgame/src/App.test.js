import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

const defaultState = {
  success: false,
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (state = defaultState) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('render component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.length).toBe(1);
  });
});

describe('redux properties', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      success: true,
      secretWord: 'party',
      guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
    });
  });
  test('has access to `success` state', () => {
    const success = true;
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has access to `secretWord` state', () => {
    const secretWord = 'party';
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test('has access to `getSecretWord` action creator, which is a function', () => {
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('`getSecretWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: true,
    guessedWords: [],
  };
  const wrapper = shallow(<UnconnectedApp getSecretWord={getSecretWordMock} />);
  // Clear mock first, because shallow calls did mount.
  getSecretWordMock.mockClear();
  wrapper.instance().componentDidMount();

  // check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
