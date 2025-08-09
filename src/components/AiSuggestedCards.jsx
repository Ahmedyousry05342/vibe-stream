import { useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import TrailerModal from "./TrailerModel";

function AiSuggestedCard({ poster, id }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + poster;
  const [videoKey, setVideoKey] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    const id = e.target.id;

    const getVideos = async () => {
      try {
        const data = await fetch(
          `https://vibe-stream-production.up.railway.app/api/trailer/${id}`
        );
        const json = await data.json();

        if (!json.results || json.results.length === 0) {
          alert("No trailer found.");
          return;
        }

        const filterData = json.results.filter(
          (data) => data.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];

        if (!trailer || !trailer.key) {
          alert("No valid trailer key found.");
          return;
        }

        const key = trailer.key.trim();
        setVideoKey(key);
        setShowModal(true);
      } catch (error) {
        console.error("Failed to fetch trailer:", error);
        alert("Something went wrong while fetching trailer.");
      }
    };

    getVideos();
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
