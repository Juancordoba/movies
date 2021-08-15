import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
border: 1px solid green;
padding: 0.2rem;
&:hover{
    cursor: pointer;
};
&:active{
    background-color: green;
    color: white;
}
`

export default function Container() {
    return (
        <StyledContainer>
            container
        </StyledContainer>
    )    
}
