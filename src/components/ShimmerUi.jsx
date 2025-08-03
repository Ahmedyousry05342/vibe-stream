function ShimmerUi() {
  return (
    <div className="p-14 pt-4 relative -top-20">
      {/* Shimmer for movie sections */}
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="mb-8">
          {/* Title shimmer */}
          <div className="h-6 bg-gray-700 rounded w-48 mb-4 animate-pulse"></div>
          
          {/* Movie cards shimmer */}
          <div className="flex gap-3 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((cardIndex) => (
              <div key={cardIndex} className="flex-shrink-0">
                <div className="w-56 h-72 bg-gray-700 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShimmerUi;