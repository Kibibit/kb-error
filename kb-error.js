module.exports = class kbError extends Error {
  /**
   * Creates a new KbError instance
   * @example
   * const error = new KbError('Error Message');
   * @param { String } message - a more detailed human-readable error message
   */
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
};
