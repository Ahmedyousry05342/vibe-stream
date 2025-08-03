function MoviePlayer({ key }) {
  return (
    <>
      {/* <iframe
      className="min-w-full h-auto md:h-[100vh]"
        //src={"https://www.youtube.com/embed/" + trailerInfo?.key}
         src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe> */}

      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=0&controls=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </>
  );
}

export default MoviePlayer;
