export class FirebaseAuthError extends Error {
  public name = "FirebaseAuthError";

  constructor(message: string) {
    super(message);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  toString() {
    return `${this.name} ${this.message}`;
  }
}

export class ApiError extends Error {
  public name = "ApiError";

  constructor(message: string) {
    super(message);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  toString() {
    return `${this.name} ${this.message}`;
  }
}
