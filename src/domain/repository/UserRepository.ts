import { User } from "../entity/User";
import { Email } from "../vo/Email";

export interface UserRepository {

  findAll(): Promise<Array<User>>;
  findByEmail(email: Email): Promise<User>;
  findById(id: string): Promise<User>;
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  exists(email: Email): Promise<boolean>;
}