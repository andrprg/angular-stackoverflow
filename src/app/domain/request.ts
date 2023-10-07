/**
 * /2.3/questions?page=1&pagesize=5&fromdate=1696291200&todate=1696377600&order=desc&min=1696377600&max=1696118400&sort=activity&site=stackoverflow
 */

export type SortType = 'activity' | 'creation' | 'votes' | 'hot' | 'week' | 'month';;

export class RequestQuestion {
    private static instance: RequestQuestion;

    page: number = 1;
    pagesize: number = 20;
    order: 'desc' | 'asc' = 'desc';
    site: string = 'stackoverflow';
    sort: SortType = 'activity';
    fromdate: number | undefined;
    todate: number | undefined;

    static getInstance() {
        if (!RequestQuestion.instance) {
            RequestQuestion.instance = new RequestQuestion();
        }
        return RequestQuestion.instance;
    }

    private constructor() { }
}