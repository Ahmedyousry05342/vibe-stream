import AiSuggestedCard from "./AiSuggestedCards";
import '../App.css'  // or whatever file contains your .hide-scrollbar styles


function AiSuggestedMovie({ title, list }) {
  
  return (
    <div className="flex flex-col relative rounded-3xl overflow-hidden">
      {/* <h1 className="scrollbar-hide p-4 pl-0 text-xl font-bold text-white h-20">{title}</h1> */}
      <div className="flex overflow-x-scroll  min-w-50 hide-scrollbar gap-3">
        {list?.map((data) => (
          data.poster_path && (
            <AiSuggestedCard key={data.id} poster={data.poster_path} id={data.id}/>
          )
        ))} 
      </div>
    </div>
  );
}

export default AiSuggestedMovie;
