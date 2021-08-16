import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Form = styled.form`
    border: 1px solid #a9aeb3;
    background-color: #43aa8b;
    color: #fff;
    border-radius: 5px;
`

const HeaderMovies = styled.div`
    padding: 0.5rem;
    border-bottom: 1px solid #a9aeb3;
    display: flex;
    justify-content: space-between;
`

const Input = styled.input`
    outline: none;
    border: 0px;
    padding: 0.5rem;
    color: #495057;
    background-color: #f8f9fa;
`

const Label = styled.label`
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content: first baseline;
`

const LS:any = {};
LS.NavFixedItem_LINK = styled(Link)`
    font-weight: bolder;
    border: 1px solid #43aa8b;
    border-radius: 5px;
    text-decoration: none;
    color: #343a40;
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    margin: 0rem 0.2rem;
    &:hover{
        background-color: #43aa8b;
        color: #fff;
    }
`


export default function Header() {

    const handleChange = (e:any) => {
        console.log(e.target.value)
    }

    return (
        <HeaderMovies>
            <Form>
                <Label>filtrar por título:</Label>
                <Input type="text" onChange={handleChange}/>
            </Form>
            <ButtonGroup>
            <LS.NavFixedItem_LINK to="upload">
                Subir CSV
            </LS.NavFixedItem_LINK>
            <LS.NavFixedItem_LINK to="upload">
                Nueva Pelicula +
            </LS.NavFixedItem_LINK>
            </ButtonGroup>
        </HeaderMovies>
    )
}
