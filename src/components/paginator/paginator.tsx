import { useEffect, useState } from "react";
import Select from "../select/select";

interface Props {
    totalItems?: number | null;
    onPageNumberChange?: (pageNumber: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
}

const Paginator = (props: Props) => {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(2);
    const [pageNumberList, setPageNumberList] = useState<Array<number>>([]);

    const { onPageNumberChange } = props;
    const { onPageSizeChange } = props;

    useEffect(() => {
        const totalPages = Math.ceil((props.totalItems ?? 0) / pageSize);

        setPageNumberList(Array.from({ length: totalPages }, (_, i) => i + 1));
    }, [props.totalItems, pageSize]);

    useEffect(() => {
        onPageNumberChange?.(pageNumber)
    }, [onPageNumberChange, pageNumber]);

    useEffect(() => {
        onPageSizeChange?.(pageSize)
    }, [onPageSizeChange, pageSize]);

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