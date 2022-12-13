import { IUser } from "./user";

export interface IBook {
  name: string;
  author: string;
  year: number;
  description: string;
  imageUrl: string;
  _id: string,
  owner: IUser,
}
