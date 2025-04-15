import BaseEndPoint from "../bases/base-endpoint";

class GovermentEntityEndPoint {
    static URL = `${BaseEndPoint.BASE}/govemententities`;
    static PAGINATION = `${BaseEndPoint.BASE}/govermententities/pagination`;
}

export default GovermentEntityEndPoint;