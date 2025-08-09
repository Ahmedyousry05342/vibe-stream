import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const topRated = useSelector((store)=>store.movie.topRated)
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const data = await fetch(
      'https://vibe-stream-r7q8.onrender.com/toprated'
    );
    const json = await data.json();
    
    
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !topRated && getTopRated();
  }, [topRated]);
};

export default useTopRated;
