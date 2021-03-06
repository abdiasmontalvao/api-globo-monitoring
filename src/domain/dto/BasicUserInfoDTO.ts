import { UserRole } from "../vo/UserRole";

export class BasicUserInfoDTO {

  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly role: string,
    public readonly roleName?: string
  ) {
    this.roleName = UserRole[Number(this.role)];
  }
}