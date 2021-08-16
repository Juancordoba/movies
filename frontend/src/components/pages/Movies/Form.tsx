import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { setMovies } from '../../../redux/actions';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Wrapper = styled.div`
//border: 1px solid red;
    width: 1000px;       
    margin: 0 auto;
    margin-top: 2rem;
    @media (min-device-width : 1600) {
        width: 100%;       
        margin: 0 auto;
    }
`;

export default function MovieForm(props:any) {
    let params:any = useParams();
    const [movie, setMovie] = useState({title:"",description:"",year:2000})
    const [readonly, setReadOnly] = useState(true);

    useEffect(() => {

        const input = document.getElementById('title')

        if(props.action==="update") { 
            input?.setAttribute('readonly', "")
            input?.classList.add("form-control-plaintext");
            input?.classList.remove("form-control");
            axios.get(`http://192.168.0.10:5000/movies/${params.title}`)
            .then(result => { 
                setMovie({title:result.data.title,description:result.data.description,year:result.data.year});
                console.log(movie);
            })
            .catch(error => {})
        }
        if(props.action==="create") { 
            input?.removeAttribute('readonly')
            input?.classList.remove("form-control-plaintext");
            input?.classList.add("form-control");
            setReadOnly(false)
        }
    },[])


   const handleChange = (e:any) => {
        switch(e.target.name){
            case "title":
                setMovie({...movie, title:e.target.value})
              break;
            case "description":
                setMovie({...movie, description:e.target.value})
              break;
            case "year":
                setMovie({...movie , year: Number(e.target.value)})
              break;
            default:
              break;
          }
   }

    const handleSave = (e:any) => {
        e.preventDefault();
        if(props.action==="update") { 
            axios.put(`http://192.168.0.10:5000/movies/${movie.title}`,movie)
            .then(result => {console.log(result.data)})
            .catch(error => {console.log({error})})
        }
        if(props.action==="create") {
            axios.post(`http://192.168.0.10:5000/movies`,movie)
            .then(result => {console.log(result.data)})
            .catch(error => {console.log({error})})
        } 
    }

    return (
        <Wrapper>
            <form className="border">
                <div className="card-header">
                    Featured
                </div>
                <div className="form-group row  p-2">
                    <label className="col-2 col-form-label">Título</label>
                    <div className="col-10">
                        <input readOnly type="text" className="form-control-plaintext" id="title" name="title" placeholder="" onChange={(e) => handleChange(e)} value={movie.title}/>
                    </div>
                </div>
                <div className="form-group row  p-2">
                    <label className="col-2 col-form-label">Descripción</label>
                    <div className="col-10">
                        <textarea className="form-control" id="description" name="description" placeholder=""  onChange={(e) => handleChange(e)} value={movie.description}></textarea>
                    </div>
                </div>
                <div className="form-group row p-2">
                    <label className="col-2 col-form-label">Año</label>
                    <div className="col-10">
                        <input type="number" className="form-control" id="year" name="year" max="2021" onChange={(e) => handleChange(e)} value={movie.year}/>
                    </div>
                </div>
                <div className="text-right p-2">
                    <button className="btn-outline-primary btn" id="button" onClick={handleSave}>Guardar</button>
                </div>

            </form>
        </Wrapper>

    )
}
