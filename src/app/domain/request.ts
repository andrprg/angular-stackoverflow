/**
 * /2.3/questions?page=1&pagesize=5&fromdate=1696291200&todate=1696377600&order=desc&min=1696377600&max=1696118400&sort=activity&site=stackoverflow
 */

export type SortType = 'activity' | 'creation' | 'votes' | 'hot' | 'week' | 'month';;

class Request {
    page: number = 1;
    pagesize: number = 20;
    order: 'desc' | 'asc' = 'desc';
    site: string = 'stackoverflow';
    sort: SortType = 'activity';
    fromdate: number | undefined;
    todate: number | undefined;

    constructor() { }
}

export class RequestQuestion extends Request {
    // Текстовый параметр произвольной формы
    q: string = '';

    // текст, который должен содержаться в текстах возвращенных вопросов.
    body: string = '';
    
    // список тегов, разделенных точкой с запятой.
    tagged: string = '';
    constructor() {
        super();
    }
}


export class RequestAnswer extends Request {
    constructor() {
        super();
    }
}


export class RequestTag extends Request {
    constructor() {
        super();
    }
}

