import { Owner } from "./Owner"

export interface IAnswer {
    owner: Owner
    is_accepted: boolean
    score: number
    last_activity_date: number
    creation_date: number
    answer_id: number
    question_id: number
    content_license: string
  }