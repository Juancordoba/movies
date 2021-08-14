import React, { useEffect } from 'react'
import axios from 'axios'
import "dotenv/config"
import { useDispatch, useSelector } from 'react-redux'
import { setMovies,countMovies } from '../../../redux/actions';
import { AppState } from '../../../redux/reducers';

export default function ListMovies() {
    const dispatch = useDispatch()
    const {movies,count}:any = useSelector((store:AppState) => store.moviesReducer)
    
    const params = {
            filter: {
                offset: 0,
                limit: 12,
                skip:0,
                order: "",
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
            console.log(result);
            dispatch(setMovies(result.data));
        })
        .catch(error => {console.log(error)});
        axios.get(`http://192.168.0.10:5000/movies/count`)
        .then(result => {
            console.log(result);
            dispatch(countMovies(result.data));
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
                {movies?.map((movie:any) => 
                    <tr key={movie.title}>
                        <td>{movie.title}</td>
                        <td>{movie.description}</td>
                        <td>{movie.year}</td>
                    </tr>)}
                </tbody>
            </table>

    )
}
