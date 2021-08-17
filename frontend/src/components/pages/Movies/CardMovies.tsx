import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    border: 2px solid #b6ccfe;
    border-radius: 5px;
    margin: 1rem;
    -moz-user-select: none; 
    -webkit-user-select: none; 
    -ms-user-select:none; 
    user-select:none;
    -o-user-select:none;
    `

const CardHeader = styled.div`
    border-bottom: 1px solid #b6ccfe;
    height: 50px;
    //background-color: #1e6091;
    //color: #fff;
    //display: flex;
    //align-items: center;
`

const CardBody = styled.div`
    border-bottom: 1px solid #b6ccfe;
`
const CardFooter = styled.div`

`

const Titulo = styled.div`

`

const Subtitulo = styled.div`

`

export default function CardMovies() {
    return (
        <Card>
            <CardHeader>
                <Titulo>Titlulo</Titulo>
                <Subtitulo>Terminator</Subtitulo>
            </CardHeader>
            <CardBody>
                Body
            </CardBody>
            <CardFooter>
                Footer
            </CardFooter>
        </Card>
    )
}
