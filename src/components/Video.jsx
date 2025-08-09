import { useSelector } from "react-redux";
import useFetchTrailer from "../hooks/useFetchTrailer";

function Video({ id }) {
  const trailerInfo = useSelector((store) => store.movie?.trailer);

  useFetchTrailer({ id });

  if (!trailerInfo?.key) return null;

  return (
    <iframe
      className="min-w-full h-auto md:h-[100vh]"
      src={`https://www.youtube.com/embed/${trailerInfo.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerInfo.key}`}
      title="YouTube trailer"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}

export default Video;
