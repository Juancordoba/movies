import React from 'react'
import Upload from './Upload'
import styled from 'styled-components'


const Wrapper = styled.div`
    //border: 1px solid #a9aeb3;
    width: 80%;
    margin: auto;
    margin-top: 1rem;
    padding-top: 1rem;
    @media (max-width: 768px) {
        width: 100%;
        margin: auto;
  }
` 

export default function UploadCSV() {

    return (
        <Wrapper>
            <Upload />   
        </Wrapper>
    )
}

