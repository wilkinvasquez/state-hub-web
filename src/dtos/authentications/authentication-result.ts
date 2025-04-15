class AuthenticationResult {
    username: string | null;
    token: string | null;

    constructor() {
        this.username = null;
        this.token = null;
    }
}

export default AuthenticationResult;