import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const now_playing = useSelector((store)=>store.movie.nowPlayingMovies)
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      'https://vibe-stream-production.up.railway.app/nowplaying'
    );
    const json = await data.json();
    
    
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !now_playing && getNowPlayingMovies();
  }, [now_playing]);
};

export default useNowPlayingMovies;
