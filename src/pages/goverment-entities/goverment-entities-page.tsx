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
import GovermentEntitiesForm from '../../components/forms/goverment-entities-form/goverment-entities-form';
import CreateOrUpdateGovermentEntity from '../../dtos/goverment-entities/create-or-update-goverment-entity';

const GovermentEntitiesPage = () => {
    const [tableRows, setTableRows] = useState<Array<GovermentEntity>>([]);
    const [totalItems, setTotalItems] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(5);
    const [filter, setFilter] = useState<string | null>('');
    const [activeFilter, setActiveFilter] = useState<string | null>('');
    const [showForm, setShowForm] = useState<boolean>(false);
    const [row, setRow] = useState<GovermentEntity>();

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
    }, [pageSize, activeFilter]);

    const onSearch = () => {
        setActiveFilter(filter);
    }

    const create = useCallback(() => {
        setShowForm(true);
    }, []);

    const onFormClose = useCallback(() => {
        setShowForm(false);
    }, []);

    const onFormSave = useCallback(() => {
        setShowForm(false);
        setRow(new CreateOrUpdateGovermentEntity());
        getData();
    }, [getData]);

    const onRowEdit = useCallback((row: GovermentEntity) => {
        setRow(row);
        setShowForm(true)
    }, []);

    const onRowDelete = useCallback((id: number | null | undefined) => {
        GovermentEntityService
            .remove(id)
            .then(() => {
                getData()
            });
    }, [getData]);

    return (
        <div className='goverment-entities-page-container'>
            <div className="row">
                <div className="goverment-entities-page-title col-9">
                    Entidades gubernamentales
                </div>

                <div className="goverment-entities-page-create-button col-3">
                    <Button
                        title={'Crear'}
                        buttonClassName={'sth-button sth-button-success sth-button-md'}
                        showLoading={false}
                        disabled={false}
                        callback={create}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-9">
                    <Input
                        title={''}
                        value={filter}
                        placeholder={'Escriba una palabra para buscar'}
                        type={'text'}
                        onChange={setFilter}
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
            </div>

            <div className="goverment-entities-page-table-container">
                <GovermentEntitiesTable
                    rows={tableRows}
                    onEdit={onRowEdit}
                    onDelete={onRowDelete}
                />
            </div>

            <div className="row">
                <div className="goverment-entities-page-total-items col-9">
                    Total de registros: {totalItems}
                </div>

                <div className="col-3">
                    <Paginator
                        totalItems={totalItems}
                        onPageNumberChange={setPageNumber}
                        onPageSizeChange={setPageSize}
                    />
                </div>
            </div>

            <GovermentEntitiesForm 
                govermentEntity={row}
                show={showForm}
                onSave={onFormSave}
                onClose={onFormClose}
            />
        </div>
    );
}

export default GovermentEntitiesPage;