import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import App from './App';

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
  test('has access to `getSecretWord` action creator, which is a function', () => {
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});
