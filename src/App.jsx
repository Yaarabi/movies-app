
import { useState } from "react"
import AddMovie from "./components/addMovie"
import Header from "./components/header"
import MovieList from "./components/movieList"


function App() {



  const [ newMovie, setNewMovie ] = useState(false)

  const show = () => setNewMovie(true)
  const hide = () => setNewMovie(false)
  const [ toFilter, setToFilter ] = useState('')

  return (
    <>
      <Header action = {show} state= { toFilter } setState = { (e)=>{ setToFilter(e.target.value) } } />
      <MovieList text = { toFilter } >
      { newMovie && <AddMovie action = {hide} />}
      </MovieList>
      </>
  )
}

export default App
