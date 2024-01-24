import localStorageMock from "./localstorage.mock.js";
import { remove } from "../../storage/index.js";

global.localStorage = localStorageMock;

describe("remove", () => {
  const tokenKey = "token";
  const tokenValue = ["a2BhR7LpXq9sT3wF8zY0vN1c"];

  beforeEach(() => {
    localStorageMock.removeItem.mockClear();
  });

  it("removes a set token from localStorage", () => {
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(tokenValue));
    expect(localStorageMock.getItem(tokenKey)).toEqual(JSON.stringify(tokenValue));
    remove(tokenKey);
    expect(localStorageMock.removeItem).toHaveBeenCalledWith(tokenKey);
    expect(localStorageMock.getItem(tokenKey)).toBeUndefined();
  });
});
