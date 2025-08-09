import ShimmerUi from "./ShimmerUi"
import GptSuggestions from "./GptSuggestions"
import SearchBar from "./SearchBar"
import { useSelector } from "react-redux";

function GptPage() {
  const isLoading = useSelector((store) => store.gpt.isLoading);
  const fetchedMovies = useSelector((store) => store.gpt.fetchedMovies);
  
  
  
  return (
    <div className="bg-black min-h-screen">
    <SearchBar/>

    {isLoading ? (
        <ShimmerUi />
      ) : (
        fetchedMovies && <GptSuggestions />
      )}
    </div>
  )
}

export default GptPage