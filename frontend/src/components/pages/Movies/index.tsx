import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { setMovies,countMovies } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducers';

import ListMovies from './ListMovies'
import PaginateMovies from './PaginateMovies'
import Header from './Header'
import env from "@beam-australia/react-env";

const Wrapper = styled.div`
    width: 90%;       
    margin: 0 auto;
    @media (min-device-width : 1300) {
        width: 100%;       
        margin: 0 auto;
    }
`;

export default function Movies() {
    const {movies,filter,offset,limit,count}:any = useSelector((store:AppState) => store.moviesReducer)
    const dispatch = useDispatch()
    const params = {
        filter: {
            offset: offset,
            limit: limit,
            skip:0,
            order: "",
            "where" : {
                "title" : {like : `%${filter}%`}
              },
            fields: {
                title: true,
                description: true,
                year: true
            }
        }
    }

    useEffect(() => {
        axios.get(`${env("API_HOST")}:${env("API_PORT")}/movies`,{params})
        .then(result => {
            dispatch(setMovies(result.data));
        })
        .catch(error => {console.log(error)});
        axios.get(`${env("API_HOST")}:${env("API_PORT")}/movies/count`)
        .then(result => {
            dispatch(countMovies(result.data.count));
        })
        .catch(error => {console.log(error)});       
    },[filter,movies,count]);
    return (
        <>
        <Header />
        <Wrapper>
            <ListMovies />
            <PaginateMovies />
        </Wrapper>
        </>
    )
}

