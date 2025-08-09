import { useSelector } from "react-redux";
import { X } from "lucide-react";

const TrailerDetails = ({ onClose }) => {
  const movie = useSelector((store) => store.movie.nowPlayingMovies);

  // If no movie or it's an empty array, avoid rendering
  if (!movie || movie.length === 0) return null;

  const mainMovie = movie[0];

  // Optional safety check
  if (!mainMovie) return null;

  const { original_title, overview, poster_path, release_date, vote_average } = mainMovie;
  const imageUrl = "https://image.tmdb.org/t/p/w500" + poster_path;

  return (
    // Backdrop with blur effect
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors duration-200"
        >
          <X size={20} />
        </button>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
          
          {/* Poster Image - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block lg:w-1/3 xl:w-2/5">
            <img 
              src={imageUrl} 
              alt={original_title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Movie Details */}
          <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
            
            {/* Mobile Poster - Only visible on small screens */}
            <div className="lg:hidden mb-6">
              <img 
                src={imageUrl} 
                alt={original_title} 
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
              />
            </div>

            {/* Title */}
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              {original_title}
            </h1>

            {/* Rating and Release Date */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Release Date:</span>
                <span className="text-white font-medium">{release_date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Rating:</span>
                <span className="text-yellow-500 font-bold flex items-center gap-1">
                  {vote_average}
                  <span>★</span>
                </span>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h3 className="text-white text-lg font-semibold mb-3">Overview</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {overview}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerDetails;