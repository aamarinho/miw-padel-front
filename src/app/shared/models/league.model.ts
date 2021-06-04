import {Gender} from "./gender.model";
import {Couple} from "./couple.model";

export interface League {
  id: string;
  name: string;
  gender: Gender;
  couples?: Couple[];
  maxCouples: number;
  startDate: string | null;
  endDate: string | null;
}
