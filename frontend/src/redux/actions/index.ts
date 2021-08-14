export const SET_MOVIES = "SET_MOVIES"
export const COUNT_MOVIES = "COUNT_MOVIES"


export const setMovies = (movies:any) => ({
    type: SET_MOVIES, movies
});

export const countMovies = (count:number) => ({
    type: COUNT_MOVIES, count
});


