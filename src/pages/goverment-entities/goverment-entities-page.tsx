import { useEffect, useState } from 'react';
import GovermentEntitiesTable from '../../components/tables/goverment-entities-table/goverment-entities-table';
import './goverment-entities-page.css';
import GovermentEntityService from '../../services/goverment-entities-service/goverment-entity-service';
import GovermentEntity from '../../dtos/goverment-entities/goverment-entity';
import PaginationResponse from '../../dtos/pagination-response/pagination-response';
import Result from '../../dtos/results/result';

const GovermentEntitiesPage = () => {
    const [tableRows, setTableRows] = useState<Array<GovermentEntity>>([]);

    useEffect(() => {
        GovermentEntityService
            .getAllPaged(1, 5, '')
            .then((result: Result<PaginationResponse<GovermentEntity>>) => {
                setTableRows(result.data?.items ?? []);

                console.log(result.data?.items);
            });
    }, []);

    return (
        <div className='goverment-entities-page-container'>
            <GovermentEntitiesTable
                rows={tableRows}
            />
        </div>
    );
}

export default GovermentEntitiesPage;