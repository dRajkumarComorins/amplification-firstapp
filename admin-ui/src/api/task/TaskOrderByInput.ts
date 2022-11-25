import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  complete?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  uidId?: SortOrder;
  updatedAt?: SortOrder;
};
