import {PaddleCourtType} from "./paddlecourttype.model";

export interface PaddleCourt{
  id?: string;
  name: string;
  paddleCourtType: PaddleCourtType;
  startTimes: string[];
  endTimes: string[];
  disabled: boolean;
}
