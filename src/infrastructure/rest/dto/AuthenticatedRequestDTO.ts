import { Request } from "express";
import { BasicUserInfoDTO } from "../../../domain/dto/BasicUserInfoDTO";

export interface AuthenticatedRequest extends Request {
  
  user?: BasicUserInfoDTO;
}