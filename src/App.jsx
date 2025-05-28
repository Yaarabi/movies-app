
import { useState, useEffect, createContext } from "react"
import AddMovie from "./components/addMovie"
import Header from "./components/header"
import MovieList from "./components/movieList"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieDetails from "./components/movieDetails"

const Context = createContext()

function App() {



  const [ newMovie, setNewMovie ] = useState(false)

  const show = () => setNewMovie(true)
  const hide = () => setNewMovie(false)
  const [ toFilter, setToFilter ] = useState('')


  const [ movies, setMovies ] = useState([])
    

    useEffect(()=>{
        fetch("/movies.json")
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch(err => console.log(err))
    }, [])

  return (
    <Context.Provider value={{ movies, setMovies }}>
    <BrowserRouter>
      <Header action = {show} state= { toFilter } setState = { (e)=>{ setToFilter(e.target.value) } } />
        <Routes>
            <Route path="/" element = {<MovieList text = { toFilter } movies={ movies } >
                  { newMovie && <AddMovie action = {hide} />}
              </MovieList>}/>
            <Route path="/movie/:title" element={ <MovieDetails movies={ movies } /> } />
      </Routes>
    </BrowserRouter>
    </Context.Provider>
  )
}

export default App
export { Context }