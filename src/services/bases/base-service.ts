import axios from "axios";
import StorageService from "../storages/storage-service";

class BaseService {
    protected static getHeaders = () => {
        const token = StorageService.getToken();

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };

        return headers;
    }

    public static get = <T>(url: string): T => {
        const headers = this.getHeaders();

        axios.get<T>(url, { headers })
            .then(response => {
                console.log('response', response);
            })
            .catch(error => {
                console.log('error', error);
            });

        return null as T;
    }

    public static post = <T>(url: string, body: string): Array<T> => {
        return [] as Array<T>;
    }

    public static put = <T>(url: string, body: string): T => {
        return '' as T;
    }

    public static delete = (url: string) => {

    }
}

export default BaseService;