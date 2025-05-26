


const Header = () => {
    return (
        <nav className="navbar navbar-sm bg-dark w-100 d-flex justify-content-evenly align-items-center" style={{ height: "10vh" }}>
            <input
            className="form-control w-25" 
            placeholder="filter"
            type="search" />
            <button className="btn btn-light">Add new Movies</button>
        </nav>
    )
}

export default Header
