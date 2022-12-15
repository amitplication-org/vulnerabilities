import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "onumber";

export const OrderTitle = (record: TOrder): string => {
  return record.onumber || record.id;
};
