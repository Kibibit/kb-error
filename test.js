const { expect } = require('chai');
const kbError = require('./index');

describe('Test kbError', () => {
  it('Should be an Error', () => {
    const err = new kbError();
    expect(err).to.be.an('error');
  });

  it('Should be distinguishable from other errors', () => {
    const err = new kbError();
    expect(err instanceof kbError).to.be.a('boolean').that.equals(true);
  });

  it('Should be extenable', () => {
    class FooError extends kbError {
      constructor(message) {
        super(message);
      }
    }

    const err = new FooError();
    expect(err).to.be.an('error');
    expect(err instanceof kbError).to.be.a('boolean').that.equals(true);
  });

  it('Should have a "name" property', () => {
    const err = new kbError();
    expect(err.name).to.be.a('string').that.equals('kbError');
  });

  it('Should have a "stack"', () => {
    const err = new kbError();
    expect(err.stack).to.exist;
  });

  it('Should use the "message" property provided to the constructor', () => {
    const msg = 'kibibit is awesome';
    const err = new kbError(msg);
    expect(err.message).to.be.a('string').that.equal(msg);
  });
});
