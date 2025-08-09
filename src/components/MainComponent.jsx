import Video from './Video';
import Title from './Title';
import { useSelector } from 'react-redux';
import HeroShimmerUi from './HeroShimmerUi';

function MainComponent() {
  const movie = useSelector((store) => store.movie.nowPlayingMovies);

  // If no movie or it's an empty array, avoid rendering
  if (!movie || movie.length === 0) return <HeroShimmerUi />; // or a loading spinner

  const mainMovie = movie[0];

  // Optional safety check
  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <>
      <Title title={original_title} overview={overview} />
      <Video id={id} />
    </>
  );
}

export default MainComponent;
