import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store)=>store.movie.upcomingMovies)
  const dispatch = useDispatch();
  const getUpcoming = async () => {
    const data = await fetch(
      'https://vibe-stream-production.up.railway.app/upcoming'
    );
    const json = await data.json();
    
    
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcoming();
  }, [upcomingMovies]);
};

export default useUpcomingMovies;
