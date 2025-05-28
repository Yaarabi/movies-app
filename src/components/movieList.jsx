// import { useEffect, useState, createContext, Children } from "react"
import MovieCard from "./movieCard"


const MovieList = ({ children, text, movies }) => {

    

    const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <>
      { children }
    <section className="d-flex flex-wrap align-content-around justify-content-evenly" >
        { filteredMovies.length > 0 ? 
          filteredMovies.map((ele, i) => ( <MovieCard key = { i } 
        title = { ele.title }
        url ={ ele.posterURL }
        description = { ele.description }
        rate = { ele.rating }
        /> )) : ( <h1>Not found ...</h1>)}  
    </section>
    </>
  )
}

export default MovieList
