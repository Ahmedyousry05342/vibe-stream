import ShimmerUi from "./ShimmerUi"
import { BG_IMG } from "../utils/constants"
import GptSuggestions from "./GptSuggestions"
import SearchBar from "./SearchBar"
import { useSelector } from "react-redux";

function GptPage() {
  const isLoading = useSelector((store) => store.gpt.isLoading);
  const fetchedMovies = useSelector((store) => store.gpt.fetchedMovies);
  
  
  
  return (
    <div>
    <div>
        <img className=" w-full h-screen object-cover bg-center -z-20 fixed" src={BG_IMG} alt="background poster" />
        <div className="fixed -z-10 inset-0 bg-black opacity-70"></div>
    </div>
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