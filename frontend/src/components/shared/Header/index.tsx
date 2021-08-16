import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface Props {
    title: string;
}

const index: React.FC<Props> = (props) => {
    return (
        <div>
               {props.title}
               <Link to="upload">Subir CSV</Link>
        </div>
    )
}

export default index

