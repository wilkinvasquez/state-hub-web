import { useCallback, useState } from 'react';
import GovermentEntitiesTable from '../../components/tables/goverment-entities-table/goverment-entities-table';
import './goverment-entities-page.css';
import GovermentEntityService from '../../services/goverment-entities-service/goverment-entity-service';
import GovermentEntity from '../../dtos/goverment-entities/goverment-entity';
import PaginationResponse from '../../dtos/pagination-response/pagination-response';
import Result from '../../dtos/results/result';
import Paginator from '../../components/paginator/paginator';

const GovermentEntitiesPage = () => {
    const [tableRows, setTableRows] = useState<Array<GovermentEntity>>([]);
    const [totalItems, setTotalItems] = useState<number>(0);

    const getGovermentEntities = useCallback((pageNumber: number, pageSize: number) => {
        GovermentEntityService
            .getAllPaged(pageNumber, pageSize, '')
            .then((result: Result<PaginationResponse<GovermentEntity>>) => {
                setTableRows(result.data?.items ?? []);
                setTotalItems(result.data?.total ?? 0);
            });
    }, []);

    return (
        <div className='goverment-entities-page-container'>
            <GovermentEntitiesTable
                rows={tableRows}
            />

            <Paginator
                totalItems={totalItems}
                callback={getGovermentEntities}
            />
        </div>
    );
}

export default GovermentEntitiesPage;