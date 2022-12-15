import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { ScoreWhereUniqueInput } from "../score/ScoreWhereUniqueInput";

export type CustomerCreateInput = {
  address?: AddressWhereUniqueInput | null;
  cnumber?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
  score?: ScoreWhereUniqueInput | null;
  test?: string | null;
};
