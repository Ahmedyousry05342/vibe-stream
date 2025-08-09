import { useState } from "react";
import { useSelector } from "react-redux"
import TrailerModal from "./TrailerModel";
import TrailerDetails from "./TrailerDetails";


function Title({title,overview}) {
  const [videoKey, setVideoKey] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const trailer = useSelector((store)=>store.movie.trailer)
  

  if(!trailer) return null;

  const handleBtnClick = () => {
    setVideoKey(trailer.key);
  }
  const handleInfoClick = () => {
    setShowModal(true);
  }

  return (
    
    <div className='absolute bg-gradient-to-r from-black  w-full h-[100vh] pt-16 md:pt-130 lg:pt-60 pl-8 md:pl-20'>
        <h1 className='text-white text-lg md:text-3xl font-bold mb-1'>{title}</h1>
        <p className='text-gray-400 text-sm mb-4 w-1/3 lg:w-1/4 hidden md:block '>{overview}</p>
        <div className='flex gap-2'>
            <button className='bg-[#00ff00] hover:bg-[#00CC00] md:px-12 px-3 md:py-2 text-[14px] md:text-lg rounded-md flex items-center gap-0.5 cursor-pointer' onClick={handleBtnClick} > <img className="w-3 h-3" src="https://icons.veryicon.com/png/o/miscellaneous/winsion/play-button-6.png" alt="" />Play</button>
            <button className='bg-gray-300/50 text-white px-1 text-[14px] md:text-lg md:px-12 py-2 rounded-md cursor-pointer hover:bg-gray-300/80 hover:text-black' onClick={handleInfoClick}>More Info</button>
        </div>

        {videoKey && <TrailerModal
            trailerKey={videoKey} // ✅ FIXED
            onClose={() => {
              setVideoKey(null); // ✅ FIXED from setTrailerKey
              setShowModal(false);
            }}
          />}

          {showModal && <TrailerDetails
            onClose={() => setShowModal(false)}
          />}
    </div>
    
  )
}

export default Title