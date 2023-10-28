import { IOwner } from "./owner"

export interface IAnswer {
    owner: IOwner;
    is_accepted: boolean;
    score: number;
    last_activity_date: number;
    creation_date: number;
    answer_id: number;
    question_id: number;
    content_license: string;
    body?: string;
  }