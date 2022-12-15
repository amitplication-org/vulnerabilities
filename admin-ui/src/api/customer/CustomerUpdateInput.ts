import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { ScoreWhereUniqueInput } from "../score/ScoreWhereUniqueInput";

export type CustomerUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  cnumber?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phone?: string | null;
  score?: ScoreWhereUniqueInput | null;
  test?: string | null;
};
