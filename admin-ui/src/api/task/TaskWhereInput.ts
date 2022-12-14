import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  complete?: BooleanFilter;
  id?: StringFilter;
  text?: StringFilter;
  uid?: UserWhereUniqueInput;
};
