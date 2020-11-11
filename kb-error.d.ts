export = kbError;
declare class kbError extends Error {
    /**
     * Creates a new KbError instance
     * @example
     * const error = new KbError('Error Message');
     * @param { String } message - a more detailed human-readable error message
     */
    constructor(message: string);
}
