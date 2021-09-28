import { BasicUserInfoDTO } from "../../../domain/dto/BasicUserInfoDTO";

export class AuthenticatedUserDTO {

  constructor(
    public readonly token: string,
    public readonly user: BasicUserInfoDTO
  ) {}
}