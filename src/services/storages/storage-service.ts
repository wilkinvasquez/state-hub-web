class StorageService {
    public static setUsername = (value: string | null) => {
        localStorage.setItem("username", value ?? '');
    }

    public static getUsername = () => {
        return localStorage.getItem("username");
    }

    public static setToken = (value: string | null) => {
        localStorage.setItem("token", value ?? '');
    }

    public static getToken = () => {
        return localStorage.getItem("token");
    }

    public static clearLocalStorage = () => {
        localStorage.clear();
    }
}

export default StorageService;