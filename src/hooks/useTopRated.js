import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const topRated = useSelector((store)=>store.movie.topRated)
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    
    
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !topRated && getTopRated();
  }, [topRated]);
};

export default useTopRated;
