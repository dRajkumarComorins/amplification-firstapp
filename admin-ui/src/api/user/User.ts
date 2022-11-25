import { JsonValue } from "type-fest";
import { Task } from "../task/Task";

export type User = {
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
};
