import { User } from "../../domain/entity/User";
import { UserRepository } from "../../domain/repository/UserRepository";
import { DecryptedPassword } from "../../domain/vo/DecryptedPassword";
import { Email } from "../../domain/vo/Email";
import { UserRole } from "../../domain/vo/UserRole";
import { PasswordCryptorImpl } from "../security/PasswordCryptorImpl";

class UserRepositoryInMemory implements UserRepository {

  private readonly users = new Array<User>();

  constructor() {
    this.initializeWithTwoUsers();
  }

  private initializeWithTwoUsers() {
    const passwordCryptor = new PasswordCryptorImpl();

    const userAdmin = new User(
      new Email('usarioadm@teste.com.br'),
      passwordCryptor.encrypt(new DecryptedPassword('admin1234')),
      UserRole.administrator
    );
    const userEmployee = new User(
      new Email('usuariocomum@teste.com.br'),
      passwordCryptor.encrypt(new DecryptedPassword('employee1234')),
      UserRole.employee
    )

    this.create(userAdmin);
    this.create(userEmployee);
  }

  public async findAll(): Promise<User[]> {
    return this.users;
  }

  public async findByEmail(email: Email): Promise<User> {
    const user = this.users.find(u => u.email.value === email.value);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  public async findById(id: string): Promise<User> {
    const user = this.users.find(u => u.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  public async create(user: User): Promise<void> {
    this.users.push(user);
  }

  public async update(user: User): Promise<void> {
    const userIndex = this.users.findIndex(u => u.id === user.id);

    if (userIndex < 0) {
      throw new Error('User not found');
    }

    this.users[userIndex] = user;
  }

  public async exists(email: Email): Promise<boolean> {
    const userExists = this.users.find(u => u.email.value === email.value);

    return userExists !== undefined;
  }
}

export default new UserRepositoryInMemory();