import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { setMovies,countMovies } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducers';

import ListMovies from './ListMovies'
import PaginateMovies from './PaginateMovies'
import Header from './Header'

const Wrapper = styled.div`
    width: 1600px;       
    margin: 0 auto;
    @media (min-device-width : 1600) {
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
        axios.get(`http://192.168.0.10:5000/movies`,{params})
        .then(result => {
            dispatch(setMovies(result.data));
        })
        .catch(error => {console.log(error)});
        axios.get(`http://192.168.0.10:5000/movies/count`)
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

