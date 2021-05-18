import {Role} from "../../core/role.model";
import {Gender} from "./gender.model";

export interface User{
  firstName: string;
  familyName: string;
  email: string;
  roles?: Role[];
  password: string;
  gender?: Gender;
  enabled?: boolean;
  birthDate?: Date | string | null;
}
