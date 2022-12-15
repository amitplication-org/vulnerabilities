import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  onumber?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
