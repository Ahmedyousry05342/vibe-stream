import { useSelector } from "react-redux";
import AiSuggestedMovie from "./AiSuggestedMovie";
// import MovieList from "./MovieList";

function GptSuggestions() {
    const fetchedMovies = useSelector(store=>store.gpt.fetchedMovies)
    const searchedMovies = useSelector(store=>store.gpt.searchedMovies)
    const userInput = useSelector(store=>store.gpt.userInput)
    if(!fetchedMovies) return;

    
    
    
  return (
    <>
    <h1 className="text-white relative text-lg md:text-3xl -top-20 px-5 md:font-semibold mb-6 ">Results Showing For : <span className="text-[#00ff00]">{userInput}</span></h1>
    <div className="grid grid-cols-2 lg:grid-cols-5 px-5 pb-5 relative -top-20 gap-6">
        {searchedMovies.map((movies,index)=>{
          return (
            <AiSuggestedMovie key={fetchedMovies[index]?.results?.[0]?.id} title={movies} list={fetchedMovies[index]?.results?.[0] ? [fetchedMovies[index].results[0]] : []} />
          )  
        
        })}
        
    </div>
    </>
    
  )
}

export default GptSuggestions