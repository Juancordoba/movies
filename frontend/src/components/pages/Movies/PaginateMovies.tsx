import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../redux/reducers'
import { countMovies, setOffset } from '../../../redux/actions'
import axios from 'axios'

export default function PaginateMovies() {
    const dispatch = useDispatch()
    const [pages, setPages] = useState([0])
    const {count,limit} = useSelector((store:AppState) => store.moviesReducer)

    useEffect(() => {
        axios.get(`http://192.168.0.10:5000/movies/count`)
        .then(result => {
            dispatch(countMovies(result.data.count));
            console.log(count)
        })
        .catch(error => {console.log(error)});
        paginate();
     },[]);

    const handleClick = (e:any) => {
        e.preventDefault();
        const pag:number=e.target.value
        dispatch(setOffset(pag*limit))
        paginate()
    }

    const paginate = () => {
        const numPages:number = Math.ceil(count/limit)
        let array = [];
        for(var x=0; x<numPages; x++){
            array.push(x)
        }
        setPages(array)
    }
    
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {
                    pages?.map(page => <li key={page} className="page-item"><button className="page-link" value={page} onClick={(e) => handleClick(e)}>{page}</button></li>)
                }
            </ul>
        </nav>
    )
}
