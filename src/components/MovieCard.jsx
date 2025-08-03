import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import MoviePlayer from "./MoviePlayer";

function MovieCard({ poster,id }) {
  const [videoKey,setVideoKey] = useState(null);
  const imageUrl = "https://image.tmdb.org/t/p/w500" + poster;

  const handleClick = (e) =>{
    // console.log(e.target.id)
    const movieId = e.target.id
    const getVideos = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
    
        const filterData = json.results.filter((data) => data.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];

        const key = trailer.key.trim();

        setVideoKey(key)
        
        
      };

      
      getVideos()
  }

  useEffect(() => {
      if (videoKey) {
      console.log(videoKey);
    }
  }, [videoKey]);

  return (<>
    <div onClick={handleClick}>
      <img className="min-w-30 md:min-w-40" src={imageUrl} alt="movie poster" id={id} />
    </div>

    {/* {videoKey && (
        <div className="mt-4">
          <MoviePlayer keyId={videoKey} />
        </div>
      )} */}
      </>
  );
}

export default MovieCard;
