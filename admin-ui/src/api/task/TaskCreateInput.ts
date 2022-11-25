import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  complete: boolean;
  text: string;
  uid: UserWhereUniqueInput;
};
