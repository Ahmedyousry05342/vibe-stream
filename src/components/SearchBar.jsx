import { useEffect, useRef } from "react";
import { GEMINI_API } from "../utils/constants";
import { GoogleGenAI } from "@google/genai";
import { useDispatch, useSelector } from "react-redux";
import '../App.css'
import {
  addFetchedMovies,
  addSearchedMovies,
  addUserInput,
  setLoading,
} from "../utils/GptSlice";
import { Search } from "lucide-react";

function SearchBar() {
  const inputText = useRef();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.gpt.searchedMovies);

  const handleSearch = async () => {
    if (!inputText.current.value) return;
    dispatch(setLoading(true));
    const ai = new GoogleGenAI({ apiKey: GEMINI_API });

    const prompt = `You are a top-tier AI-powered movie recommendation engine.
    Based on the user's mood or preferences, suggest a list of highly-rated and widely loved movies.
    User input: "${inputText.current.value}"
    Return only the names of the movies, separated by commas.
    If user enters specific movie like "raaz , 3 idiots or hera pheri" , is hera pheri chosen 1st movie give hera pheri then suggest it's other parts then multiple relevent movies like phir hera pheri or same movies of that genre or name or actor.
    like if someone enters sultaan or sultan understand they may be referring to populor movie of salman khan spellings may be sometimes wrong but give result like in this case sultan, and for every movie with similar spellings or variations, provide the correct title and suggest relevant alternatives.Also consider the user's mood and preferences when suggesting movies,
    if user enters a movie with alot of parts, consider suggesting the entire series or related movies in the same franchise.Don't give irrelevant suggestions, movies would be fetched from TMDB so keep in mind also if user enters something like "final destination" show all the parts of that populor movie series.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    dispatch(addSearchedMovies(response.text?.split(",")));
    dispatch(addUserInput(inputText.current.value));
  };

  useEffect(() => {
    if (!movies) return;

    const fetchMovieDetails = async () => {
      const searchMovieTMDB = async (movie) => {
        // ✅ Updated to call backend instead of TMDB directly
        const data = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}api/search/${encodeURIComponent(movie)}`
          // `https://localhost:3000/api/search/${encodeURIComponent(movie)}`
        );
        const json = await data.json();
        return json;
      };

      const promiseArray = movies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(setLoading(false));
      dispatch(addFetchedMovies(tmdbResults));
    };

    fetchMovieDetails();
  }, [movies]);

  return (
    <div className="flex justify-center items-center gap-10 pt-10 pb-30 md:pt-30 flex-col">
      <h1 className="text-white text-xl md:text-[2rem]  font-bold flex items-center gap-2">
        Introducing Our
        <div className="masking-container">
          <h1 className="masked-text">Smart AI Search</h1>
        </div>
      </h1>

      <div className="flex gap-3 mx-4">
        <div className="relative group">
          <div
            className="
            absolute -inset-1 rounded-lg
            bg-gradient-to-r from-[#00ff00] to-green-500
            opacity-30 blur-lg
            transition-opacity duration-300
            group-focus-within:opacity-70
            pointer-events-none
          "
          />

          <input
            type="text"
            ref={inputText}
            placeholder="What do you feel like watching?"
            className="
            relative z-10
            w-full lg:w-96 px-5 py-3
            rounded-lg bg-black text-white placeholder-gray-500
            border border-gray-700
            focus:outline-none focus:border-[#00ff00]
            transition-colors duration-300
          "
          />
        </div>

        <button
          onClick={handleSearch}
          className="
          relative px-3 py-1 md:py-3 overflow-hidden rounded-full
          bg-gradient-to-r from-[#00ff00] to-green-500
          text-black font-semibold
          cursor-pointer
          before:absolute before:inset-0
          before:bg-gradient-to-r before:from-pink-400 before:to-red-600
          before:opacity-50 before:blur-xl
          before:animate-pulse
          hover:scale-105
          transition-transform duration-300 ease-in-out
          
        "
        >
          <Search />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
