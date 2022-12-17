import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ScoreWhereUniqueInput } from "../score/ScoreWhereUniqueInput";

export type CustomerWhereInput = {
  address?: AddressWhereUniqueInput;
  cnumber?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: IntFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  phone?: StringNullableFilter;
  score?: ScoreWhereUniqueInput;
  test?: StringNullableFilter;
};
