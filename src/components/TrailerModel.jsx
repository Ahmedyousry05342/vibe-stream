import { X } from "lucide-react";

const TrailerModal = ({ trailerKey, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button 
          className="absolute top-2 right-2 z-10 bg-red-500/80 hover:bg-red-600 text-white border-none rounded-lg p-2 cursor-pointer font-bold transition-all duration-200 shadow-lg hover:shadow-xl"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* YouTube Iframe Container */}
        <div className="relative w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0&modestbranding=1`}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title="Movie Trailer"
          />
        </div>

        
      </div>
    </div>
  );
};

export default TrailerModal;