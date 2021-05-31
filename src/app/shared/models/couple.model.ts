import {Gender} from "./gender.model";
import {CoupleState} from "./couplestate.model";

export interface Couple {
  id: string;
  captainEmail: string;
  captainName: string;
  playerEmail: string;
  playerName: string;
  coupleState: CoupleState;
  gender: Gender;
  creationDate: Date

}


