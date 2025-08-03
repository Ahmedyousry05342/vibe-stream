
function AiSuggestedCard({ poster }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + poster;

  return (
    <div>
      <img className="object-cover" src={imageUrl} alt="movie poster" />
    </div>
  );
}

export default AiSuggestedCard;
