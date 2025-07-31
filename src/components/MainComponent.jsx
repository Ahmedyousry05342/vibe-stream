import Video from './Video'
import Title from './Title'
import { useSelector } from 'react-redux';

function MainComponent() {
    const movie = useSelector(store=>store.movie.nowPlayingMovies)
    if(!movie) return;
    const mainMovie = movie[0]

    const {original_title,overview,id} = mainMovie;
  return (
    <>
    <Title title={original_title} overview={overview}/>
    <Video id={id}/>
    </>
    
  )
}

export default MainComponent