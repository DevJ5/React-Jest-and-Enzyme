import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

const setup = (secretWord = 'party') => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest
    .fn()
    .mockReturnValue([{ secretWord, language: 'en' }], jest.fn());

  React.useReducer = mockUseReducer;
  // Enzyme doesn't run useEffect on shallow, so we use mount
  return mount(<App />);
};

test('App renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {
    setup();
    // check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
  test('secretWord does not update on App update', () => {
    const wrapper = setup();

    mockGetSecretWord.mockClear();
    // To trigger update, since wrapper.update() doesn't trigger useEffect.
    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe('secretWord is not null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup('party');
  });
  test('renders app when secretWord is not null', () => {
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.exists()).toBe(true);
  });
  test('does not render spinner when secretWord is not null', () => {
    const component = findByTestAttr(wrapper, 'component-spinner');
    expect(component.exists()).toBe(false);
  });
});

describe('secretWord is  null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null);
  });
  test('does not render app when secretWord is null', () => {
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.exists()).toBe(false);
  });
  test('does render spinner when secretWord is null', () => {
    const component = findByTestAttr(wrapper, 'component-spinner');
    expect(component.exists()).toBe(true);
  });
});
