import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useFetchTrailer = ({id}) => {
    const dispatch = useDispatch()

    const trailer = useSelector((store)=>store.movie.trailer)
    
  const getVideos = async () => {
  try {
    const response = await fetch(`https://vibe-stream-production.up.railway.app/api/trailer/${id}`);
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
