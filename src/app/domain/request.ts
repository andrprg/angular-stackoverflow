/**
 * /2.3/questions?page=1&pagesize=5&fromdate=1696291200&todate=1696377600&order=desc&min=1696377600&max=1696118400&sort=activity&site=stackoverflow
 */

export type SortType = 'activity' | 'creation' | 'votes' | 'hot' | 'week' | 'month';;

export class RequestBase {
    page: number;
    pagesize: number;
    order: 'desc' | 'asc';
    site: string;
    sort: SortType;
    fromdate: number | undefined;
    todate: number | undefined;

    constructor(obj?: Partial<RequestBase>) { 
        this.page = obj?.page ?? 1;  
        this.pagesize = obj?.pagesize ?? 20;  
        this.order = obj?.order ?? 'desc';  
        this.site = obj?.site ?? 'stackoverflow';  
        this.sort = obj?.sort ?? 'activity';  
        this.fromdate = obj?.fromdate;
        this.todate = obj?.todate;
    }
}

export class RequestQuestion extends RequestBase {
    // Текстовый параметр произвольной формы
    q: string;

    // текст, который должен содержаться в текстах возвращенных вопросов.
    body: string;
    
    // список тегов, разделенных точкой с запятой.
    tagged: string;
    constructor(obj?: Partial<RequestQuestion>) {
        super(obj);
        this.q = obj?.q ?? ''
        this.body = obj?.body ?? '';
        this.tagged = obj?.tagged ?? '';      
    }
}


export class RequestAnswer extends RequestBase {
    // Вернуть ответ с телом ответа
    filter: string = 'withbody';
    constructor() {
        super();
    }
}


export class RequestTag extends RequestBase {
    constructor() {
        super();
    }
}


