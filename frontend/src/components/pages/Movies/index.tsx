import React from 'react'
import styled from 'styled-components'


import ListMovies from './ListMovies'
import PaginateMovies from './PaginateMovies'
import Breadcrumb from '../../shared/Header'
import Card from './CardMovies'
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

    return (
        <>
        <Header />
        <Wrapper>
            <ListMovies />
        </Wrapper>
        </>
    )
}

