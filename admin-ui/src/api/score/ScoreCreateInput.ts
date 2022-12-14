import { CustomerCreateNestedManyWithoutScoresInput } from "./CustomerCreateNestedManyWithoutScoresInput";

export type ScoreCreateInput = {
  customers?: CustomerCreateNestedManyWithoutScoresInput;
  value?: number | null;
};
