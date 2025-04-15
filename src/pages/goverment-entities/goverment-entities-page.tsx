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
    const [totalItems, setTotalItems] = useState<number>(2);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(0);
    const [searchString, setSearchString] = useState<string | null>('');

    const getData = useCallback(() => {
        GovermentEntityService
            .getAllPaged(pageNumber, pageSize, searchString)
            .then((result: Result<PaginationResponse<GovermentEntity>>) => {
                setTableRows(result.data?.items ?? []);
                setTotalItems(result.data?.total ?? 0);
            });
    }, [pageNumber, pageSize, searchString]);

    // const search = useCallback(() => {
    //     getData(pageNumber, pageSize);
    // }, [getData, pageNumber, pageSize]);

    useEffect(() => {
        getData();
    }, [getData])

    return (
        <div className='goverment-entities-page-container'>
            <Input
                title={'Buscar'}
                value={searchString}
                type={'text'}
                callback={setSearchString}
            />

            <Button
                title={'Buscar'}
                buttonClassName={''}
                showLoading={false}
                disabled={false}
                callback={getData}
            />

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