import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const topRated = useSelector((store)=>store.movie.topRated)
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const data = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}toprated`
    );
    const json = await data.json();
    
    
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !topRated && getTopRated();
  }, [topRated]);
};

export default useTopRated;
