import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const now_playing = useSelector((store)=>store.movie.nowPlayingMovies)
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}nowplaying`
    );
    const json = await data.json();
    
    
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !now_playing && getNowPlayingMovies();
  }, [now_playing]);
};

export default useNowPlayingMovies;
