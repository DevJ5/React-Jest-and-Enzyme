import stringsModule from './strings';
const { getStringByLanguage } = stringsModule;

const strings = {
  en: {
    submit: 'Submit',
  },
  emoji: { submit: '🚀' },
  mermish: {},
};

test('returns correct submit string for english', () => {
  const str = getStringByLanguage('en', 'submit', strings);
  expect(str).toBe('Submit');
});

test('returns correct submit string for emoji', () => {
  const str = getStringByLanguage('emoji', 'submit', strings);
  expect(str).toBe('🚀');
});

test('returns english submit string for when language does not exist', () => {
  const str = getStringByLanguage('german', 'submit', strings);
  expect(str).toBe('Submit');
});

test('returns english submit string for when submit key does not exist for language', () => {
  const str = getStringByLanguage('mermish', 'submit', strings);
  expect(str).toBe('Submit');
});
