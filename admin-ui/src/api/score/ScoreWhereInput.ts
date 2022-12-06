import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ScoreWhereInput = {
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  value?: FloatNullableFilter;
};
