import { DecryptedPassword } from "../vo/DecryptedPassword";

export interface PasswordCryptor {

  encrypt(decryptedPassword: DecryptedPassword): string;
  match(encryptedPassword: string, decryptedPassword: DecryptedPassword): boolean;
}