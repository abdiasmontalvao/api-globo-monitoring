import Crypto from "crypto";
import { PasswordCryptor } from "../../domain/security/PasswordCryptor";
import { DecryptedPassword } from "../../domain/vo/DecryptedPassword";

export class PasswordCryptorImpl implements PasswordCryptor {

  private static readonly hashType = 'sha256';
  private static readonly digestMode = 'hex';

  public encrypt(decryptedPassword: DecryptedPassword): string {
    return (
      Crypto
        .createHash(PasswordCryptorImpl.hashType)
        .update(decryptedPassword.value)
        .digest(PasswordCryptorImpl.digestMode)
    );
  }
    
  public match(encryptedPassword: string, decryptedPassword: DecryptedPassword): boolean {
    return encryptedPassword === this.encrypt(decryptedPassword);
  }
}