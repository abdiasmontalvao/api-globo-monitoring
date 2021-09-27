import { DecryptedPassword } from "../vo/DecryptedPassword";
import { Email } from "../vo/Email";
import { UserRole } from "../vo/UserRole";

export class CreateUserDTO {

  constructor(
     public readonly email: Email,
     public readonly password: DecryptedPassword,
     public readonly role: UserRole
  ) {}
}