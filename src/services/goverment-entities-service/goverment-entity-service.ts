import axios from "axios";
import GovermentEntityEndPoint from "../../constants/endpoints/users/goverment-entity-endpoint";
import GovermentEntity from "../../dtos/goverment-entities/goverment-entity";
import BaseService from "../bases/base-service";
import PaginationResponse from "../../dtos/pagination-response/pagination-response";
import Result from "../../dtos/results/result";
import CreateOrUpdateGovermentEntity from "../../dtos/goverment-entities/create-or-update-goverment-entity";

class GovermentEntityService extends BaseService {
    public static createOrUpdate(govermentEntity: CreateOrUpdateGovermentEntity | null | undefined): Promise<Result<CreateOrUpdateGovermentEntity>> {
        const url = GovermentEntityEndPoint.URL;
        const body = JSON.stringify(govermentEntity);

        const promise = this.post<CreateOrUpdateGovermentEntity>(url, body);

        return promise as Promise<Result<CreateOrUpdateGovermentEntity>>;
    }

    public static remove(id: number | null | undefined): Promise<Result<boolean>> {
        const url = GovermentEntityEndPoint.URL;

        const promise = this.delete(url, id ?? 0);

        return promise as Promise<Result<boolean>>;
    }

    public static getAllPaged(pageNumber: number, pageSize: number, filter: string | null = ''): Promise<Result<PaginationResponse<GovermentEntity>>> {
        const headers = this.getHeaders();
        const url = `${GovermentEntityEndPoint.PAGINATION}?pageNumber=${pageNumber}&pageSize=${pageSize}&filter=${filter}`;

        const promise = new Promise((resolve, reject) => {
            axios.get(url, { headers })
                .then(response => {
                    resolve(response.data as PaginationResponse<GovermentEntity>);
                })
                .catch(error => {
                    reject(error);
                });
        })

        return promise as Promise<Result<PaginationResponse<GovermentEntity>>>;
    }
}

export default GovermentEntityService;