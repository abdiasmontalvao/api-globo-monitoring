import { v4 as uuid } from 'uuid';
import { Email } from '../vo/Email';
import { UserRole } from '../vo/UserRole';

export class User {

  public readonly id: string;

  public email: Email;
  public password: string;
  public role: UserRole;

  constructor(email: Email, password: string, role: UserRole, id?: string) {
    this.email = email;
    this.password = password;
    this.role = role;

    if (id) {
      this.id = id;
    } else {
      this.id = uuid()
    }
  }
}