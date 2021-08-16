export const SET_MOVIES = "SET_MOVIES"
export const DEL_MOVIE = "DEL_MOVIE"
export const COUNT_MOVIES = "COUNT_MOVIES"
export const TOGGLE_ISLOGGED = "TOGGLE_ISLOGGED"

export const setMovies = (movies:any) => ({
    type: SET_MOVIES, movies
});

export const delMovie = (title:string) => ({
    type: DEL_MOVIE, title
});

export const countMovies = (count:number) => ({
    type: COUNT_MOVIES, count
});

export const toggleisLogged = () => ({
    type: TOGGLE_ISLOGGED
})