import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  complete?: boolean;
  text?: string;
  uid?: UserWhereUniqueInput | null;
};
