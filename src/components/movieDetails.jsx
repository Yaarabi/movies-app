
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = ({ movies }) => {
    const { title } = useParams();
    const navigate = useNavigate();

    const movie = movies.find((m) => m.title === title);

    return movie ? (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <iframe width="560" height="315" src={movie.trailerURL} title={movie.title} />
            <button onClick={() => navigate("/")}>Go Back</button>
        </div>
    ) : (
    <h1>Not Found ...</h1>
    );
};

export default MovieDetails;
