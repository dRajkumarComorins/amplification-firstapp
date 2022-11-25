import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type UserWhereInput = {
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
  username?: StringFilter;
};
