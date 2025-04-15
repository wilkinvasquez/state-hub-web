import { useEffect } from 'react';
import GovermentEntity from '../../../dtos/goverment-entities/goverment-entity';
import '../table.css';

interface Props {
    rows?: Array<GovermentEntity>
}

const GovermentEntitiesTable = (props: Props) => {
    useEffect(() => {
        console.log('rows', props.rows);
    }, [props.rows]);

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
                            <tr>
                                <td>{row.name}</td>
                                <td>5</td>
                                <td>$1.00</td>
                                <td>$5.00</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default GovermentEntitiesTable;