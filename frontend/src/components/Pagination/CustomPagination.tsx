import * as React from 'react';
import Pagination from '@mui/material/Pagination';


type CustomPaginationProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>,
    numberOfPages: number
}

function CustomPagination(props: CustomPaginationProps) {
    const handlePageChange = (page: number) => {
        props.setPage(page);
        window.scroll(0, 0);
    }

        return (
            <Pagination count={props.numberOfPages}
                        onChange={(event, value) => handlePageChange(value)}
                        color="primary" hideNextButton
                        hidePrevButton/>
        );

}

export default CustomPagination