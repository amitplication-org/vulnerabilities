import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  discount?: FloatNullableFilter;
  id?: StringFilter;
  onumber?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
  totalPrice?: IntNullableFilter;
};
