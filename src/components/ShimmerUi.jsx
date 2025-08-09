function ShimmerUi() {
  return (
    <div className="px-3 sm:px-6 md:px-10 lg:px-14 py-4 relative -top-20">
      {/* Shimmer for movie sections */}
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="mb-6 sm:mb-8">
          {/* Title shimmer - responsive width */}
          <div className="h-4 sm:h-5 md:h-6 bg-gray-700 rounded w-28 sm:w-40 md:w-48 lg:w-56 mb-3 sm:mb-4 animate-pulse"></div>
          
          {/* Mobile: Grid layout */}
          <div className="block sm:hidden">
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((cardIndex) => (
                <div key={cardIndex} className="w-full aspect-[2/3]">
                  <div className="w-full h-full bg-gray-700 rounded-lg animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tablet and Desktop: Horizontal scroll */}
          <div className="hidden sm:flex gap-3 md:gap-4 lg:gap-5 overflow-hidden">
            {Array.from({ length: 6 }, (_, cardIndex) => (
              <div 
                key={cardIndex} 
                className={`flex-shrink-0 ${
                  cardIndex >= 3 ? 'hidden md:block' : ''
                } ${
                  cardIndex >= 4 ? 'hidden lg:block' : ''
                } ${
                  cardIndex >= 5 ? 'hidden xl:block' : ''
                }`}
              >
                <div className="w-36 h-52 md:w-44 md:h-60 lg:w-48 lg:h-64 xl:w-52 xl:h-72 bg-gray-700 rounded-lg animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShimmerUi;