import { IQuestion } from "./question";


export interface IResponse {
  has_more: boolean;
  items: IQuestion[];
  quota_max: number;
  quota_remaining: number;

}
