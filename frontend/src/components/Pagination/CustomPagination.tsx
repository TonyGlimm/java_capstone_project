import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import {createTheme, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },  });

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
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 10,
                }}
            >
            <ThemeProvider theme={darkTheme}>
            <Pagination count={props.numberOfPages}
                        onChange={(event, value) => handlePageChange(value)}
                        color="primary" hideNextButton
                        hidePrevButton/>
            </ThemeProvider>
            </div>
        );
}

export default CustomPagination