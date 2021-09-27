import { DecryptedPassword } from "../vo/DecryptedPassword";
import { Email } from "../vo/Email";
import { UserRole } from "../vo/UserRole";

export class UpdateUserDTO {

  constructor(
    public readonly id: string,
    public readonly email?: Email,
    public readonly password?: DecryptedPassword,
    public readonly role?: UserRole
  ) {}
}