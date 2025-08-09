import { useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import TrailerModal from "./TrailerModel";

function MovieCard({ poster, id }) {
  const [videoKey, setVideoKey] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const imageUrl = "https://image.tmdb.org/t/p/w500" + poster;

  const handleClick = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/trailer/${id}`
    );
    const trailer = await response.json();

    if (trailer?.key) {
      setVideoKey(trailer.key.trim());
      setShowModal(true);
    }
  } catch (error) {
    console.error("Error fetching trailer:", error.message);
  }
};



  return (
    <>
      <div onClick={handleClick}>
        <img
          className="min-w-30 md:min-w-40 cursor-pointer"
          src={imageUrl}
          alt="movie poster"
          id={id}
        />
      </div>

      {showModal && (
        <div className="">
          <TrailerModal
            trailerKey={videoKey} // ✅ FIXED
            onClose={() => {
              setVideoKey(null); // ✅ FIXED from setTrailerKey
              setShowModal(false);
            }}
          />
        </div>
      )}
    </>
  );
}

export default MovieCard;
