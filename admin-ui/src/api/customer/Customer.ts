import { Address } from "../address/Address";
import { Order } from "../order/Order";
import { Score } from "../score/Score";

export type Customer = {
  address?: Address | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: number;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  score?: Score | null;
  test: string | null;
  updatedAt: Date;
};
