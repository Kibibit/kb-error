const kbError = require('./kb-error');

describe('Test kbError', () => {
  it('Should be an Error', () => {
    const err = new kbError();
    expect(err).toBeInstanceOf(Error);
  });

  it('Should be distinguishable from other errors', () => {
    const err = new kbError();
    expect(err).toBeInstanceOf(kbError);
  });

  it('Should be extendable', () => {
    class FooError extends kbError {
      constructor(message) {
        super(message);
      }
    }

    const err = new FooError();
    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(kbError);
    expect(err).toBeInstanceOf(FooError);
    expect(err.name).toBe('FooError');
  });

  it('Should have a "name" property', () => {
    const err = new kbError();
    expect(typeof err.name).toBe('string');
    expect(err.name).toBe('kbError');
  });

  it('Should have a "stack"', () => {
    const err = new kbError();
    expect(err.stack).toBeDefined();
  });

  it('Should use the "message" property provided to the constructor', () => {
    const msg = 'kibibit is awesome';
    const err = new kbError(msg);
    expect(err.message).toBe(msg);
  });
});
