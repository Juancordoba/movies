import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
//import { userInfo } from 'os'
import styled from 'styled-components'

const LS:any = {};
LS.NavFixedItem_LINK = styled(Link)`
    text-decoration: none;
    color: #343a40;
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    border-left: 1px solid #fff;
        border-right: 1px solid #fff;
    &:hover{
        //background-color: #e9ecef;
        cursor: pointer;
        color: #bb3e03;
        border-left: 1px solid #a9aeb3;
        border-right: 1px solid #a9aeb3;
    }
`

const Brand = styled.div`
    font-size: larger;
    font-weight: bolder;
    padding: 0.5rem;
    color: #343a40;
`;

const Navbar = styled.nav`
    border-bottom: 1px solid #a9aeb3;
    display: flex;
    justify-content: space-between;
    padding: 0rem 1rem;
`;

export default function Navigation() {
    return (
        <Navbar>
            <Brand>APP Movies</Brand>
        </Navbar>
    )
}


