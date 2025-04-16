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

    protected static getSingleHeaders = () => {
        const token = StorageService.getToken();

        const headers = {
            'Authorization': `Bearer ${token}`,
        };

        return headers;
    }

    public static post = <T>(url: string, body: string): Promise<Result<T>> => {
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

    public static delete = (url: string, id: number): Promise<Result<boolean>> => {
        const urlWithId =  `${url}/${id}`
        const headers = this.getSingleHeaders();

        const promise = new Promise((resolve, reject) => {
            axios.delete(urlWithId, { headers })
                .then(response => {
                    resolve(response.data as Result<boolean>);
                })
                .catch(error => {
                    reject(error);
                });
        })

        return promise as Promise<Result<boolean>>;
    }
}

export default BaseService;