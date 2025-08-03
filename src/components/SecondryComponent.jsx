import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondryComponent() {
  const nowPlayingMovies = useSelector((store) => store.movie?.nowPlayingMovies);
  const populorMovies = useSelector((store) => store.movie?.populorMovies);
  const topRatedMovies = useSelector((store) => store.movie?.topRated);
  const upcomingMovies = useSelector((store) => store.movie?.upcomingMovies);

  return (
    <div className="bg-black">
      <MovieList title="Now Playing" list={nowPlayingMovies} />
      <MovieList title="Top Rated" list={topRatedMovies} />
      <MovieList title="Populor" list={populorMovies} />
      <MovieList title="Upcoming Movies" list={upcomingMovies} />
    </div>
  );
}

export default SecondryComponent;
