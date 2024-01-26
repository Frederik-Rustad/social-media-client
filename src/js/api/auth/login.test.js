import localStorageMock from './localstorage.mock.js';
import { login } from './login';

const Token = 'a2BhR7LpXq9sT3wF8zY0vN1c';
const ValidEmail = 'newuser@noroff.no';
const ValidPassword = 'newpassword';

const UserLogin = {
  email: ValidEmail,
  password: ValidPassword,
};

const invalidEmail = 'user@email.com';
const invalidPassword = '12345';

beforeEach(() => {
  localStorageMock.getItem.mockClear();
  localStorageMock.setItem.mockClear();
  localStorageMock.clear.mockClear();
});

function fetchSuccess(status = 201, statusText = 'Success!') {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: () => Promise.resolve({ ...UserLogin, Token }),
  });
}
function fetchFailure(status = 404, statusText = 'Unsuccessful') {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe('login', () => {
  it('returns a valid token when provided with valid credentials', async () => {
    global.fetch = jest.fn().mockImplementation(() => fetchSuccess());
    const profile = await login(ValidEmail, ValidPassword);
    expect(profile.Token).toBe(Token);
  });

  it('throws an error when provided with invalid credentials', async () => {
    global.fetch = jest.fn().mockImplementation(() => fetchFailure());
    await expect(login(invalidEmail, invalidPassword)).rejects.toThrow(
      'Unsuccessful',
    );
  });
});
