import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store)=>store.movie.upcomingMovies)
  const dispatch = useDispatch();
  const getUpcoming = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    
    
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcoming();
  }, [upcomingMovies]);
};

export default useUpcomingMovies;
