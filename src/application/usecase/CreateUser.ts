import { CreateUserDTO } from "../../domain/dto/CreateUserDTO";
import { BasicUserInfoDTO } from "../../domain/dto/BasicUserInfoDTO";
import { User } from "../../domain/entity/User";
import { UserRepository } from "../../domain/repository/UserRepository";

export class CreateUser {

  constructor(private readonly userRepository: UserRepository) {}

  public async execute(newUserInfo: CreateUserDTO): Promise<BasicUserInfoDTO> {
    const alreadyExists = await this.userRepository.exists(newUserInfo.email);

    if (alreadyExists) {
      throw Error('User already exists');
    }

    const newUser = new User(newUserInfo.email, newUserInfo.password.value, newUserInfo.role);
    await this.userRepository.create(newUser);

    const userDataResponse = new BasicUserInfoDTO(newUser.id, newUser.email.value, newUser.role.toString());

    return userDataResponse;
  }
}