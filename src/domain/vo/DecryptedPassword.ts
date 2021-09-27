export class DecryptedPassword {

  private static readonly validationPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

  constructor(public readonly value: string) {
    this.validate();
  }

  private validate(): void {
    if (!this.value.match(DecryptedPassword.validationPattern)) {
      throw new Error('The password must have between 8 and 16 characters and least 1 numeric character');
    }
  }
}