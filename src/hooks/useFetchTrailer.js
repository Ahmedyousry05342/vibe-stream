import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useFetchTrailer = ({id}) => {
    const dispatch = useDispatch()

    const trailer = useSelector((store)=>store.movie.trailer)
    
  const getVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((data) => data.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailer(trailer));
  };
  
  useEffect(() => {
    !trailer && getVideos();
  }, [trailer]);
};

export default useFetchTrailer;
