class PaginationResponse<T> {
    items?: Array<T> | null;
    total?: number | null;

    constructor() {
        this.items = null;
        this.total = null;
    }
}

export default PaginationResponse;