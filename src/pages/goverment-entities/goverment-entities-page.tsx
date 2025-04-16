import { useCallback, useEffect, useState } from 'react';
import GovermentEntitiesTable from '../../components/tables/goverment-entities-table/goverment-entities-table';
import './goverment-entities-page.css';
import GovermentEntityService from '../../services/goverment-entities-service/goverment-entity-service';
import GovermentEntity from '../../dtos/goverment-entities/goverment-entity';
import PaginationResponse from '../../dtos/pagination-response/pagination-response';
import Result from '../../dtos/results/result';
import Paginator from '../../components/paginator/paginator';
import Input from '../../components/input/input';
import Button from '../../components/button/button';

const GovermentEntitiesPage = () => {
    const [tableRows, setTableRows] = useState<Array<GovermentEntity>>([]);
    const [totalItems, setTotalItems] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(2);
    const [filter, setFilter] = useState<string | null>('');
    const [activeFilter, setActiveFilter] = useState<string | null>('');

    const getData = useCallback(() => {
        GovermentEntityService
            .getAllPaged(pageNumber, pageSize, activeFilter)
            .then((result: Result<PaginationResponse<GovermentEntity>>) => {
                setTableRows(result.data?.items ?? []);
                setTotalItems(result.data?.total ?? 0);
            });
    }, [pageNumber, pageSize, activeFilter]);

    useEffect(() => {
        getData();
    }, [getData]);

    useEffect(() => {
        setPageNumber(1);
    }, [activeFilter]);

    const onSearch = () => {
        setActiveFilter(filter);
    }

    return (
        <div className='goverment-entities-page-container'>
            <div className="goverment-entities-page-search-input">
                <Input
                    title={''}
                    value={filter}
                    type={'text'}
                    callback={setFilter}
                />
            </div>

            <div className="goverment-entities-page-search-button col-3">
                <Button
                    title={'Buscar'}
                    buttonClassName={'sth-button sth-button-secondary sth-button-md'}
                    showLoading={false}
                    disabled={false}
                    callback={onSearch}
                />
            </div>

            <GovermentEntitiesTable
                rows={tableRows}
            />

            <Paginator
                totalItems={totalItems}
                onPageNumberChange={setPageNumber}
                onPageSizeChange={setPageSize}
            />
        </div>
    );
}

export default GovermentEntitiesPage;