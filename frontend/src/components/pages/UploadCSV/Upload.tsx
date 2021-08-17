//import { InputOutlined } from '@material-ui/icons';
import axios from 'axios';
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import env from "@beam-australia/react-env";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const Input = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
  &+label{
    border: 1px solid #43aa8b;;
    padding: 1rem;
    font-size: 1.25em;
    font-weight: 700;
    color: 343a40;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;
  };
  &+label:hover{
    background-color: #43aa8b;
    color: #fff;
  }
`;


export default function Upload() {
  const readFile = ( e:any ) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file);

    fileReader.onload = () => {
      let lineas:string[];
      typeof(fileReader.result) === 'string'? lineas = fileReader.result.split('\r\n') : lineas = []
      lineas.forEach(linea => {
        let movie = linea.split(';');
        const params = {"title":movie[0], "description": movie[1], "year":Number(movie[2])}
        axios.post(`${env("API_HOST")}:${env("API_PORT")}/movies`, params)
        .then(result => {console.log(result.data)})
        .catch(error => {console.log(error.code)})
      })
      e.target.value = null;    
      document.getElementById('link')?.click();
    }

  fileReader.onerror = () => {
    console.log(fileReader.error)
  }

}


  const handleClick = () => {
    document.getElementById('file')?.click();
  }

  return (
    <Container>
      <Link to="/" id="link"></Link>
      <Input 
        type="file" 
        name="file"
        id="file"
        multiple= {false }
        onChange={readFile}
        accept=".csv"
      />
      <label onClick={handleClick}>Seleccione el archivo CSV</label>
    </Container>
  )
}
