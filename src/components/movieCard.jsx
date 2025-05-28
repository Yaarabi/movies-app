


const MovieCard = (props) => {
  return (
    <article className="card mt-5" style={{ height: "60vh", width: "30vw" }}>
        <img className="card-header" style={{ height: "65%" }} src={props.url} alt={"poster of "+ props.title} />
        <div className="card-body">
        <h4>{ props.title }</h4>
        <p className="p-0">{ props.description }</p>
        <h4>{ props.rate }</h4>
        </div>
    </article>
  )
}

export default MovieCard
