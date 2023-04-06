import {
    Button,
    createTheme,
    Tab,
    Tabs,
    TextField,
    ThemeProvider,
} from "@mui/material";
import "./SearchPage.css";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import React from "react";

import axios from "axios";
import CustomPagination from "../../components/Pagination/CustomPagination";
import MovieCard from "../../components/MovieCard/MovieCard";

const SearchPage = () => {
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const darkTheme = createTheme({
        palette: {
            /*type: "dark",*/
            primary: {
                main: "#fff",
            },
        },
    });

/*    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
                    process.env.REACT_APP_API_KEY
                }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
            );
            setContent(data.results);
            setNumOfPages(data.total_pages);
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };*/

    useEffect(() => {
        window.scroll(0, 0);
/*        fetchSearch();*/
        // eslint-disable-next-line
    }, [type, page]);

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <div className="search">
                    <TextField
                        style={{ flex: 1 }}
                        className="searchBox"
                        label="SearchPage"
                        variant="filled"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button
                      /*  onClick={fetchSearch}*/
                        variant="contained"
                        style={{ marginLeft: 10 }}
                    >
                        <SearchIcon fontSize="large" />
                    </Button>
                </div>
                <Tabs
                    value={type}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(event, newValue) => {
                        setType(newValue);
                        setPage(1);
                    }}
                    style={{ paddingBottom: 5 }}
                    aria-label="disabled tabs example"
                >
                    <Tab style={{ width: "50%" }} label="SearchPage Movies" />
                    <Tab style={{ width: "50%" }} label="SearchPage TV Series" />
                </Tabs>
            </ThemeProvider>
            <div className="trending">


            </div>
{/*            <CustomPagination setPage={props.setPage} numberOfPages={50}/>*/}
        </div>
    );
};

export default SearchPage;
