import localStorageMock from './localstorage.mock.js';
import { logout } from './logout.js';
import { save, load } from '../../storage/index.js';

global.localStorage = localStorageMock;

describe('remove', () => {
  const token_Key = 'token';
  const token_Value = 'a2BhR7LpXq9sT3wF8zY0vN1c';

  beforeEach(() => {
    localStorageMock.removeItem.mockClear();
  });

  it('removes the set token from localStorage', () => {
    save(token_Key, token_Value);
    expect(load(token_Key)).toEqual(token_Value);
    expect(localStorage.getItem(token_Key)).toEqual(
      JSON.stringify(token_Value),
    );
    logout();
    expect(localStorage.getItem(token_Key)).toEqual(null);
  });
});
