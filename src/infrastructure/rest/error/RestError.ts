export class RestError extends Error {

  constructor(
    public readonly message: string,
    public readonly code: number
  ) {
    super(message);
  }
}