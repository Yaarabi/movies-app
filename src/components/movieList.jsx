import { useEffect, useState, createContext, Children } from "react"
import MovieCard from "./movieCard"

const Context = createContext()

const MovieList = ({ children, text }) => {

    const [ movies, setMovies ] = useState([])
    

    useEffect(()=>{
        fetch("/movies.json")
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch(err => console.log(err))
    }, [])

    const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <Context.Provider value={ {movies, setMovies} }>
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
    </Context.Provider>
  )
}

export default MovieList
export { Context }
