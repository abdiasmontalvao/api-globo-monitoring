import { DecryptedPassword } from "../vo/DecryptedPassword";
import { Email } from "../vo/Email";

export class UserLoginDTO {

  constructor(
    public readonly email: Email,
    public readonly password: DecryptedPassword
  ) {}
}