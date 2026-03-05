require("@testing-library/jest-dom");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

global.Request = class {};
global.Response = class {
  constructor(body, init) {
    this.body = body;
    this.status = init?.status || 200;
  }
};