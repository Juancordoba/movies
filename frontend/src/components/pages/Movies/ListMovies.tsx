import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "dotenv/config"
import { useDispatch, useSelector } from 'react-redux'
import { setMovies,countMovies,delMovie } from '../../../redux/actions';
import { AppState } from '../../../redux/reducers';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useHistory } from 'react-router'

export default function ListMovies() {
    const history = useHistory();
    const dispatch = useDispatch()
    const {movies}:any = useSelector((store:AppState) => store.moviesReducer)
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");

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
            dispatch(setMovies(result.data));
        })
        .catch(error => {console.log(error)});
        axios.get(`http://192.168.0.10:5000/movies/count`)
        .then(result => {
            dispatch(countMovies(result.data));
        })
        .catch(error => {console.log(error)});       

        

    },[]);

    const handleDelete = (e:any) => {
        setTitle(e.target.id);
        handleShow();
    }
    
    const handleClick = () => {
        console.log(title)
        axios.delete(`http://192.168.0.10:5000/movies/${title}`)
        .then(result => {
            //tengo que borrar la peli de redux para que se actualice la tabla
            dispatch(delMovie(title));
        })
        .catch(err => handleClose())
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const redirect = (e:any) => {
        setTitle(e.target.id);
        history.push(`/movies/${e.target.id}`);
    }

    return (
        <>
        <br />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Año</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {movies?.map((movie:any) => 
                    <tr key={movie.title}>
                        <td>{movie.title}</td>
                        <td>{movie.description}</td>
                        <td>{movie.year}</td>
                        <td>
                            <ButtonGroup>
                                <Button id={movie.title} onClick={handleDelete} variant="outline-danger"  size="sm">Borrar</Button>
                                <Button id={movie.title} onClick={redirect} variant="outline-primary" size="sm">Editar</Button>
                            </ButtonGroup>
                        </td>
                    </tr>)}
                </tbody>
            </Table>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Importante</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Desea eliminar la pelicula <b>{title}</b>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="danger" onClick={handleClick}>OK</Button>
                </Modal.Footer>
            </Modal>

            
            </>
    )
}
