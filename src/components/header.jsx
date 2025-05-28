
import { createContext } from "react"


const InputText = createContext()

const Header = (props) => {


    

    return (
        <nav className="navbar navbar-sm bg-dark w-100 d-flex justify-content-evenly align-items-center" style={{ height: "15vh" }}>
            <input
            className="form-control w-25"
            value={props.state}
            onChange={props.setState} 
            placeholder="toFilter"
            type="search" />

            <button onClick={ props.action} className="btn btn-light">Add new Movies</button>
        </nav>
    )
}

export default Header
export { InputText }
