import { UpdateUserDTO } from "../../domain/dto/UpdateUserDTO";
import { BasicUserInfoDTO } from "../../domain/dto/BasicUserInfoDTO";
import { UserRepository } from "../../domain/repository/UserRepository";

export class UpdateUser {

  constructor(private readonly userRepository: UserRepository) {}

  public async execute(newUserInfo: UpdateUserDTO): Promise<BasicUserInfoDTO> {
    const user = await this.userRepository.findById(newUserInfo.id);
    
    Object.assign(user, newUserInfo);

    await this.userRepository.update(user);

    const userDataResponse = new BasicUserInfoDTO(user.id, user.email.value, user.role.toString());

    return userDataResponse;
  }
}