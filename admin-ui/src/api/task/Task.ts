import { User } from "../user/User";

export type Task = {
  complete: boolean;
  createdAt: Date;
  id: string;
  text: string;
  uid?: User;
  updatedAt: Date;
};
