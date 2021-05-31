import {Gender} from "./gender.model";
import {Couple} from "./couple.model";

export interface League {
  id: string;
  name: string;
  gender: Gender;
  couples?: Couple[];
  maxCouples: number;
  initDate: Date;
  endDate: Date;

}
