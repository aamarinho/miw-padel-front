import {PaddleCourtType} from "./paddlecourttype-model";

export interface PaddleCourt{
  name: string;
  paddleCourtType: PaddleCourtType;
  startTimes: string[];
  endTimes: string[];
  disabled: boolean;
}
