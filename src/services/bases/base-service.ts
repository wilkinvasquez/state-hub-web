import axios from "axios";
import StorageService from "../storages/storage-service";
import Result from "../../dtos/results/result";

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

    public static post = <T>(url: string, body: string): Promise<Result<T>> => {
        console.log('body', body);
        const headers = this.getHeaders();

        const promise = new Promise((resolve, reject) => {
            axios.post(url, body, { headers })
                .then(response => {
                    resolve(response.data as Result<T>);
                })
                .catch(error => {
                    reject(error);
                });
        })

        return promise as Promise<Result<T>>;
    }

    public static delete = (url: string) => {

    }
}

export default BaseService;