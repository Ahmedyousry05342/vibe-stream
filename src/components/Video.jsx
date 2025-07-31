import { useSelector } from "react-redux";
import useFetchTrailer from "../hooks/useFetchTrailer";

function Video({ id }) {
  const trailerInfo = useSelector(store=>store.movie?.trailer)

  useFetchTrailer(id)
  
  return (
    <>
      <iframe
      className="w-full h-[100vh]"
        //src={"https://www.youtube.com/embed/" + trailerInfo?.key}
         src={`https://www.youtube.com/embed/${trailerInfo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerInfo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </>
  );
}

export default Video;
