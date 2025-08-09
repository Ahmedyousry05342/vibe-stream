import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useFetchTrailer = ({id}) => {
    const dispatch = useDispatch()

    const trailer = useSelector((store)=>store.movie.trailer)
    
  const getVideos = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}api/trailer/${id}`);
    const trailer = await response.json();
    dispatch(addTrailer(trailer));
  } catch (error) {
    console.error("Error fetching trailer:", error.message);
  }
};

  
  useEffect(() => {
    !trailer && getVideos();
  }, [trailer]);
};

export default useFetchTrailer;
