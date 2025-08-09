import { useDispatch, useSelector } from "react-redux";
import { addPopulorMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useFetchPopulor = () => {
  const populorMovies = useSelector((store)=>store.movie.populorMovies)
  const dispatch = useDispatch();
  const getPopulorMovies = async () => {
    const data = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}populor`
    );
    const json = await data.json();
    
    
    dispatch(addPopulorMovies(json.results));
  };

  useEffect(() => {
    !populorMovies && getPopulorMovies();
  }, [populorMovies]);
};

export default useFetchPopulor;
