import { UserLogin } from "../../../application/usecase/UserLogin";
import { UserLoginDTO } from "../../../domain/dto/UserLoginDTO";
import { UserRepositoryInMemory } from "../../repository/UserRepositoryInMemory";
import { JWTHandler } from "../../security/JWTHandler";
import { PasswordCryptorImpl } from "../../security/PasswordCryptorImpl";
import { AuthenticatedUserDTO } from "../dto/AtuhenticatedUserDTO";

export class AuthService {

  private readonly userLogin: UserLogin;

  constructor() {
    const userRepository = new UserRepositoryInMemory();
    const passwordCryptor = new PasswordCryptorImpl();
    this.userLogin = new UserLogin(userRepository, passwordCryptor);
  }

  public async login(userData: UserLoginDTO): Promise<AuthenticatedUserDTO> {
    const userInfo = await this.userLogin.execute(userData);
    const userToken = JWTHandler.create(userInfo);
    const authenticatedUser = new AuthenticatedUserDTO(userToken);

    return authenticatedUser;
  }
}