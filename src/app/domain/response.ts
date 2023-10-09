import { IAnswer } from "./answer";
import { IQuestion } from "./question";


export interface IResponse<T> {
  has_more: boolean;
  items: T[];
  quota_max: number;
  quota_remaining: number;

}
