import BaseEndPoint from "../bases/base-endpoint";

class UserEndPoint {
    static URL = `${BaseEndPoint.BASE}/users`;
    static AUTHENTICATION_URL = `${BaseEndPoint.BASE}/users/authentication`;
}

export default UserEndPoint;