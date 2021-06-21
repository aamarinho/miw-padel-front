import {Role} from "./role.model";
import {Gender} from "../shared/models/gender.model";

export interface User {
  token: string;
  email?: string;
  gender?: Gender;
  roles?: Role[];
}
