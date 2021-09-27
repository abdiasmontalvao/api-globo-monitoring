import { BasicUserInfoDTO } from "../../domain/dto/BasicUserInfoDTO";
import { UserLoginDTO } from "../../domain/dto/UserLoginDTO";
import { UserRepository } from "../../domain/repository/UserRepository";
import { PasswordCryptor } from "../../domain/security/PasswordCryptor";

export class UserLogin {

  constructor(
      private readonly userRepository: UserRepository,
      private readonly passwordCryptor: PasswordCryptor
  ) {}

  public async execute(userData: UserLoginDTO): Promise<BasicUserInfoDTO> {
    const user = await this.userRepository.findByEmail(userData.email);

    const passwordMatch = this.passwordCryptor.match(user.password, userData.password);

    if (!passwordMatch) {
      throw new Error("User password doesn't match");
    }

    const userDataResponse = new BasicUserInfoDTO(user.id, user.email.value, user.role.toString());

    return userDataResponse;
  }
}