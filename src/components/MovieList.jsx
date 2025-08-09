import MovieCard from "./MovieCard";
import '../App.css' 


function MovieList({ title, list=[] }) {
  
  return (
    <div className="flex flex-col pl-6 md:pl-14 relative md:-top-40 md:pb-0 pb-4">
      <h1 className="scrollbar-hide p-2 md:p-4 pl-0 text-xl md:text-2xl font-bold text-white">{title}</h1>
      <div className="flex md:pl-3 overflow-x-scroll hide-scrollbar gap-2 md:gap-3">
        {list?.map((data) => (
          <MovieCard key={data.id} poster={data.poster_path} id={data.id} />
        ))} 
      </div>
    </div>
  );
}

export default MovieList;
