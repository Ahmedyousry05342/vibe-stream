import { useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import TrailerModal from "./TrailerModel";

function AiSuggestedCard({ poster, id }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + poster;
  const [videoKey, setVideoKey] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = async (e) => {
    const movieId = e.target.id;
    if (!movieId) {
      console.error("Movie ID is missing.");
      return;
    }

    try {
      const response = await fetch(`/api/trailer/bearer/${movieId}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      if (!json.results || json.results.length === 0) {
        alert("No trailer found.");
        return;
      }

      const filterData = json.results.filter((data) => data.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];

      if (!trailer || !trailer.key) {
        alert("No valid trailer key found.");
        return;
      }

      setVideoKey(trailer.key.trim());
      setShowModal(true);
    } catch (error) {
      console.error("Failed to fetch trailer:", error);
      alert("Something went wrong while fetching trailer.");
    }
  };


  return (
    <>
      <div onClick={handleClick}>
        <img
          className="object-cover cursor-pointer"
          src={imageUrl}
          id={id}
          alt="movie poster"
        />
      </div>

      {showModal && (
        <div>
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

export default AiSuggestedCard;
