import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "dotenv/config"

export default function ListMovies() {
    const [movies, setMovies] = useState([])
    const params = {
        filter: {
        offset: 0,
        limit: 12,
        skip:0,
        order: "year desc",
        fields: {
          title: true,
          description: true,
          year: true
        }
    }
      }
      
    useEffect(() => {
        axios.get(`http://localhost:5000/movies`,{params})
        .then(result => {
            console.log(result);
            setMovies(result.data);
        })
        .catch(error => {console.log(error)});
    },[]);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Título</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Año</th>
                </tr>
            </thead>
            <tbody>
            {movies.map((movie:any) => 
                <tr key={movie.title}>
                    <td>{movie.title}</td>
                    <td>{movie.description}</td>
                    <td>{movie.year}</td>
                </tr>)}
            </tbody>
        </table>
    )
}
