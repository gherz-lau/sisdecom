export class Pagination<T> {
    pager: any;
    pagedItems: Array<T>;
    page: number;
    pageSize: number;
    constructor() {
        this.page = 1;
        this.pagedItems = new Array<T>();
        this.pageSize = 20;
    }
}