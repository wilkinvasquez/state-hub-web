import GovermentEntity from '../../../dtos/goverment-entities/goverment-entity';
import '../table.css';

interface Props {
    rows?: Array<GovermentEntity>,
}

const GovermentEntitiesTable = (props: Props) => {
    return (
        <div className='sth-table-container'>
            <table className='sth-table'>
                <thead className='sth-table-head'>
                    <tr>
                        <th className='sth-table-head-cell'></th>
                        <th className='sth-table-head-cell'>Nombre</th>
                        <th className='sth-table-head-cell'>Acrónimo</th>
                        <th className='sth-table-head-cell'>Dirección</th>
                        <th className='sth-table-head-cell'>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.rows?.map((row: GovermentEntity) => (
                            <tr key={row.id}>
                                <td className='sth-table-icon-cell'>
                                    <img className='sth-table-icon' src="icons/edit.png" alt="" />
                                    <img className='sth-table-icon' src="icons/trash.png" alt="" />
                                </td>
                                <td className='sth-table-cell'>{row.name}</td>
                                <td className='sth-table-cell'>{row.acronym}</td>
                                <td className='sth-table-cell'>{row.address}</td>
                                <td className='sth-table-cell'>{row.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default GovermentEntitiesTable;