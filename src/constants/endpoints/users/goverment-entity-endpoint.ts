import BaseEndPoint from "../bases/base-endpoint";

class GovermentEntityEndPoint {
    static URL = `${BaseEndPoint.BASE}/govermententities`;
    static PAGINATION = `${BaseEndPoint.BASE}/govermententities/pagination`;
}

export default GovermentEntityEndPoint;