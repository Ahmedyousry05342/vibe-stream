import { useState } from "react";
import TrailerModal from "./TrailerModel";
import { poster_constant } from "../utils/constants";

function AiSuggestedCard({ poster, id }) {
  const imageUrl = poster_constant + poster;
  const [videoKey, setVideoKey] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    const id = e.target.id;

    const getVideos = async () => {
      try {
        const data = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}api/trailer/${id}`
        );

        const json = await data.json();

        if (!json || !json.key) {
          alert("No valid trailer found.");
          return;
        }


        setVideoKey(json.key.trim());
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
      <div onClick={handleClick} className="flex justify-center">
        <img
          className="min-w-40 object-cover rounded-lg cursor-pointer"
          src={imageUrl}
          id={id}
          alt="movie poster"
        />
      </div>

      {showModal && (
        <div>
          <TrailerModal
            trailerKey={videoKey}
            onClose={() => {
              setVideoKey(null); 
              setShowModal(false);
            }}
          />
        </div>
      )}
    </>
  );
}

export default AiSuggestedCard;
