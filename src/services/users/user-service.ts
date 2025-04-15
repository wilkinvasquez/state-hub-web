import axios from "axios";
import BaseService from "../bases/base-service";
import Authentication from "../../dtos/authentications/authentication";
import UserEndPoint from "../../constants/endpoints/users/user-endpoint";
import Result from "../../dtos/results/result";

class UserService extends BaseService {
    public static saveUserInfo = () => {

    }

    public static getUserInfo = () => {

    }

    public static authenticate<T>(authentication: Authentication | null): Promise<Result<T>> {
        const headers = this.getHeaders();
        const url = UserEndPoint.AUTHENTICATION_URL;

        const promise = new Promise((resolve, reject) => {
            axios.post(url, authentication, {headers})
                .then(response => {
                    resolve(response.data as T);
                })
                .catch(error => {
                    reject(error);
                });
        })

        return promise as Promise<Result<T>>;
    }
}

export default UserService;