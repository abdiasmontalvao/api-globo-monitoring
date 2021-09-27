export class Email {

  private static readonly validationPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;

  constructor(public readonly value: string) {
    this.validate();
  }

  private validate(): void {
    if (!this.value.match(Email.validationPattern)) {
      throw new Error('Invalid email');
    }
  }
}