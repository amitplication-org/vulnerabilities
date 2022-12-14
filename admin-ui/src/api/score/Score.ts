import { Customer } from "../customer/Customer";

export type Score = {
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  updatedAt: Date;
  value: number | null;
};
