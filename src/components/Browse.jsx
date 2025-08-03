import useFetchPopulor from "../hooks/usePopulorMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondryComponent from "./SecondryComponent";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptPage from "./GptPage";


function Browse() {
  useNowPlayingMovies()
  useFetchPopulor()
  useTopRated()
  useUpcomingMovies()

  const gptButtonStatus = useSelector((store)=>store.gpt.gptButton)

  
  
  return (
    gptButtonStatus ? 
    (<GptPage/>) :
    (<div>
      <MainComponent/>
      <SecondryComponent/>
    </div>)
  )
}

export default Browse