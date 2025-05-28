
import { useState, useContext } from "react"
import { Context } from "./movieList"

const AddMovie = ({ action }) => {

    const [ Title, setTitle ] = useState('')
    const [ Description, setDescription ] = useState('')
    const [ PosterURL, setPosterURL ] = useState('')
    const [ Rating, setRating ] = useState('')

    const { movies, setMovies }= useContext(Context)

    const addMovie = () => {
        const obj = {
            title : Title,
            descreption : Description,
            posterURL: PosterURL,
            rating: Rating
        }

        setMovies([ ...movies, obj ])
        console.log(movies)
}

return (
    <section className='w-50 border mt-5 container d-flex flex-column justify-content-evenly' style={{ height: "50vh" }}>
        <input className='form-control' 
        placeholder='Movie Title'
        value={Title}
        onChange={(e)=> setTitle(e.target.value)}
        type="text" />
        <textarea className='form-control'
        value={Description}
        onChange={(e)=> setDescription(e.target.value)}
        placeholder='Movie Description'
        name="" id=""></textarea>
        <input className='form-control'
        value={PosterURL}
        onChange={(e)=> setPosterURL(e.target.value)} 
        placeholder='Movie poster URL'
        type="text" />
        <input className='form-control' 
        value={Rating}
        onChange={(e)=> setRating(e.target.value)} 
        placeholder='Movie Rating'
        type="text" />
        <button onClick={()=>{ addMovie() ; action }} className='btn btn-primary'>Add</button>
    </section>
)
}

export default AddMovie
