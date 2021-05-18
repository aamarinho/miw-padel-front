import {PaddleCourtType} from "./paddlecourttype-model";

export interface PaddleCourt{
  name: string;
  paddleCourtType: PaddleCourtType;
  startTimes: String[];
  endTimes: String[];
  disabled: boolean;
}
