import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondryComponent from "./secondryComponent";


function Browse() {
  useNowPlayingMovies()
  
  return (
    <div className="">
      <MainComponent/>
      <SecondryComponent/>
    </div>
  )
}

export default Browse