import { GetUsers } from "../../../application/usecase/GetUsers";
import { CreateUser } from "../../../application/usecase/CreateUser";
import { UpdateUser } from "../../../application/usecase/UpdateUser";
import { BasicUserInfoDTO } from "../../../domain/dto/BasicUserInfoDTO";
import userRepository from "../../repository/UserRepositoryInMemory";
import { CreateUserDTO } from "../../../domain/dto/CreateUserDTO";
import { UpdateUserDTO } from "../../../domain/dto/UpdateUserDTO";

export class UserService {

  private readonly getUsers: GetUsers;
  private readonly createUser: CreateUser;
  private readonly updateUser: UpdateUser;

  constructor() {
    this.getUsers = new GetUsers(userRepository);
    this.createUser = new CreateUser(userRepository);
    this.updateUser = new UpdateUser(userRepository);
  }

  public async getAll(): Promise<Array<BasicUserInfoDTO>> {
    const users = await this.getUsers.execute();

    return users;
  }

  public async create(userData: CreateUserDTO): Promise<BasicUserInfoDTO> {
    const user = await this.createUser.execute(userData);

    return user;
  }

  public async save(userData: UpdateUserDTO): Promise<BasicUserInfoDTO> {
    const user = await this.updateUser.execute(userData);

    return user;
  }
}