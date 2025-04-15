import GovermentEntity from '../../../dtos/goverment-entities/goverment-entity';
import '../table.css';

interface Props {
    rows?: Array<GovermentEntity>,
}

const GovermentEntitiesTable = (props: Props) => {
    return (
        <div className='sth-table-container'>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Acrónimo</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.rows?.map((row: GovermentEntity) => (
                            <tr key={row.id}>
                                <td>{row.name}</td>
                                <td>{row.acronym}</td>
                                <td>{row.address}</td>
                                <td>{row.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default GovermentEntitiesTable;