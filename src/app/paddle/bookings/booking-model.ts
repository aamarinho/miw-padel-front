import {User} from "../../shared/models/user.model";
import {PaddleCourt} from "./paddlecourt-model";

export interface Booking{
  user: User;
  paddleCourt: PaddleCourt;
  date: Date;
  timeRange: string;
}
