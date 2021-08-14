import axios from 'axios';
import React, { useState } from 'react'

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
      const result = axios.post('http://localhost:5000/movies', params)
      .then(result => {console.log(result.data)})
      .catch(error => {console.log(error.code)})
    })
    e.target.value = null;    

  }

  fileReader.onerror = () => {
    console.log(fileReader.error)
  }

}

  return (
    <div>
      <input 
        type="file" 
        multiple= {false }
        onChange={readFile}
      />
    </div>
  )
}
