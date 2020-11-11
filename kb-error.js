module.exports = class kbError extends Error {
  /**
   * Constructor for the kbError class
   * @param { String } message - Error message
   */
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
};
