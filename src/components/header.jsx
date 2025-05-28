


const Header = (props) => {
    return (
        <nav className="navbar navbar-sm bg-dark w-100 d-flex justify-content-evenly align-items-center" style={{ height: "15vh" }}>
            <input
            className="form-control w-25" 
            placeholder="filter"
            type="search" />
            <button onClick={ props.action} className="btn btn-light">Add new Movies</button>
        </nav>
    )
}

export default Header
