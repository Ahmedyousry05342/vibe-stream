import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopulorMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useFetchPopulor = () => {
  const populorMovies = useSelector((store)=>store.movie.populorMovies)
  const dispatch = useDispatch();
  const getPopulorMovies = async () => {
    const data = await fetch(
      'https://vibe-stream-r7q8.onrender.com/populor'
    );
    const json = await data.json();
    
    
    dispatch(addPopulorMovies(json.results));
  };

  useEffect(() => {
    !populorMovies && getPopulorMovies();
  }, [populorMovies]);
};

export default useFetchPopulor;
