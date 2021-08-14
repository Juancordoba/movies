import React from 'react'

import ListMovies from './ListMovies'
import PaginateMovies from './PaginateMovies'
import Breadcrumb from '../../shared/breadcrumb'

export default function Movies() {
    return (
        <>
            <Breadcrumb title="Movies" />
            <div id="container">
                <ListMovies />
                <PaginateMovies />
            </div>
        </>
    )
}
