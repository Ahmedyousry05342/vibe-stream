import { useEffect, useRef } from "react";
import { API_OPTIONS, GEMINI_API } from "../utils/constants";
import { GoogleGenAI } from "@google/genai";
import { useDispatch, useSelector } from "react-redux";
import { addFetchedMovies, addSearchedMovies, addUserInput, setLoading} from "../utils/GptSlice";

function SearchBar() {
  const inputText = useRef();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.gpt.searchedMovies);



  const handleSearch = async () => {
    dispatch(setLoading(true));
    const ai = new GoogleGenAI({ apiKey: GEMINI_API });

    const prompt = `You are a top-tier AI-powered movie recommendation engine.
    Based on the user's mood or preferences, suggest a list of 10 highly-rated and widely loved movies.
    User input: "${inputText.current.value}"
    Return only the names of the movies, separated by commas.
    If user enters specific movie like "raaz , 3 idiots or hera pheri" , is hera pheri chosen 1st movie give hera pheri then suggest 9 relevent movies like phir hera pheri or same movies of that genre or name or actor.
    like if someone enters sultaan or sultan understand they may be referring to populor movie of salman khan spellings may be sometimes wrong but give result like in this case sultan`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    dispatch(addSearchedMovies((response.text)?.split(",")));
    dispatch(addUserInput(inputText.current.value))
  };




  useEffect(() => {
    if (!movies) return;

    const fetchMovieDetails = async () => {

      const searchMovieTMDB = async (movie) => {
        const data = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
          API_OPTIONS
        );
        const json = await data.json();
        return json;
      };

      const promiseArray = movies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(setLoading(false));
      dispatch(addFetchedMovies(tmdbResults))

    };

    fetchMovieDetails();
  }, [movies]);

  return (
    <div className="flex justify-center items-center gap-4 py-30">
      <div className="relative group">
        <div
          className="
            absolute -inset-1 rounded-lg
            bg-gradient-to-r from-red-600 to-pink-500
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
            w-70 lg:w-96 px-5 py-3
            rounded-lg bg-black text-white placeholder-gray-500
            border border-gray-700
            focus:outline-none focus:border-red-500
            transition-colors duration-300
          "
        />
      </div>

      {/* NEON-PULSE BUTTON */}
      <button
        onClick={handleSearch}
        className="
          relative px-3 py-2 md:px-8 md:py-3 overflow-hidden rounded-lg
          bg-gradient-to-r from-red-600 to-pink-500
          text-white font-semibold
          cursor-pointer
          before:absolute before:inset-0
          before:bg-gradient-to-r before:from-pink-400 before:to-red-600
          before:opacity-50 before:blur-xl
          before:animate-pulse
          hover:scale-105
          transition-transform duration-300 ease-in-out
        "
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
