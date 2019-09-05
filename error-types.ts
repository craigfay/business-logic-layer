export class ServerError extends Error {
  constructor(message) {
    super(message);
  }
}
export class ClientError extends Error {
  constructor(message) {
    super(message);
  }
}