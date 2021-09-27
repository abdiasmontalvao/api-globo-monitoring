import { BasicUserInfoDTO } from "../../domain/dto/BasicUserInfoDTO";
import { UserRepository } from "../../domain/repository/UserRepository";

export class GetUsers {

  constructor(private readonly userRepository: UserRepository) {}

  public async execute(): Promise<Array<BasicUserInfoDTO>> {
    const users = await this.userRepository.findAll();

    return users.map(user => {
      return new BasicUserInfoDTO(user.id, user.email.value, user.role.toString())
    });
  }
}