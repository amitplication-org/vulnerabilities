import { CustomerUpdateManyWithoutScoresInput } from "./CustomerUpdateManyWithoutScoresInput";

export type ScoreUpdateInput = {
  customers?: CustomerUpdateManyWithoutScoresInput;
  value?: number | null;
};
