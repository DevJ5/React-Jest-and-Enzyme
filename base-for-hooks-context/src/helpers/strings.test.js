import stringsModule from './strings';
const { getStringByLanguage } = stringsModule;

const strings = {
  en: {
    submit: 'Submit',
  },
  emoji: { submit: '🚀' },
  mermish: {},
};

describe('language string testing', () => {
  const mockWarn = jest.fn();
  let originalWarn;

  beforeEach(() => {
    originalWarn = console.warn;
    console.warn = mockWarn;
  });

  // Set up a clear of the mocked function
  afterEach(() => {
    console.warn = originalWarn;
  });

  test('returns correct submit string for english', () => {
    const str = getStringByLanguage('en', 'submit', strings);
    expect(str).toBe('Submit');
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test('returns correct submit string for emoji', () => {
    const str = getStringByLanguage('emoji', 'submit', strings);
    expect(str).toBe('🚀');
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test('returns english submit string when language does not exist', () => {
    const string = getStringByLanguage('notALanguage', 'submit', strings);
    expect(string).toBe('Submit');
    expect(mockWarn).toHaveBeenCalledWith(
      'Could not get string [submit] for [notALanguage]'
    );
  });
  test('returns english submit string when submit key does not exist for language', () => {
    const string = getStringByLanguage('mermish', 'submit', strings);
    expect(string).toBe('Submit');
    expect(mockWarn).toHaveBeenCalledWith(
      'Could not get string [submit] for [mermish]'
    );
  });
});
