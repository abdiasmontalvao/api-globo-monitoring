import { GetUsers } from "../../../application/usecase/GetUsers";
import { BasicUserInfoDTO } from "../../../domain/dto/BasicUserInfoDTO";
import { UserRepositoryInMemory } from "../../repository/UserRepositoryInMemory";

export class UserService {

  private readonly getUsers: GetUsers;

  constructor() {
    const userRepository = new UserRepositoryInMemory();
    this.getUsers = new GetUsers(userRepository);
  }

  public async getAll(): Promise<Array<BasicUserInfoDTO>> {
    const users = await this.getUsers.execute();

    return users;
  }
}