import { useEffect, useState } from "react";
import Select from "../select/select";

interface Props {
    totalItems?: number | null;
    callback?: (pageNumber: number, pageSize: number) => void;
}

const Paginator = (props: Props) => {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pageNumberList, setPageNumberList] = useState<Array<number>>([]);
    const [pageSize, setPageSize] = useState<number>(2);

    const { callback } = props;

    useEffect(() => {
        const totalPages = Math.ceil((props.totalItems ?? 0) / pageSize);

        setPageNumberList(Array.from({ length: totalPages }, (_, i) => i + 1));
    }, [props.totalItems, pageSize]);

    useEffect(() => {
        callback?.(pageNumber, pageSize);
    }, [callback, pageNumber, pageSize]);

    return (
        <div className="sth-paginator-container">
            {
                pageNumberList.map((pageNumber: number) => (
                    <button
                        key={pageNumber}
                        className="sth-paginator-page-number"
                        onClick={() => setPageNumber(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))
            }

            <Select
                options={[2, 5, 10, 15, 25, 35, 50, 100, 300, 500]}
                callback={(value: string | null) => setPageSize(parseInt(value ?? '2'))}
            />
        </div>
    );
}

export default Paginator;