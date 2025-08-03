import '../App.css'

const TrailerModal = ({ trailerKey, onClose }) => {
  return (
    <div className="modal-backdrop ">
      <div className="modal-content">
        <iframe
          width="100%"
          height="500px"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Trailer"
        ></iframe>
        <button className="close-btn cursor-pointer" onClick={onClose}>x</button>
      </div>
    </div>
  );
};

export default TrailerModal;
