import { useEffect, useState } from "react"
import MovieCard from "./movieCard"



const MovieList = () => {

    const [ movies, setMovies ] = useState([])

    useEffect(()=>{
        fetch("/movies.json")
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch(err => console.log(err))
    }, [])


  return (
    <section className="d-flex flex-wrap align-content-around justify-content-evenly" style={{minHeight: "200vh"}}>
        {(movies) ? movies.map((ele, i) => ( <MovieCard key = { i } 
        title = { ele.title }
        url ={ ele.posterURL }
        description = { ele.description }
        rate = { ele.rating }
        /> )) : ( <h1>Loading ...</h1>)}  
    </section>
  )
}

export default MovieList
