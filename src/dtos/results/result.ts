class Result<T> {
    success: boolean;
    data: T | null;
    messages: Array<string> | null;

    constructor() {
        this.success = false;
        this.data = null;
        this.messages = null;
    }
}

export default Result;