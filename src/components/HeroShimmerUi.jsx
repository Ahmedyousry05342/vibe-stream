function HeroShimmerUi() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background video/image shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-shimmer"></div>
      </div>
      
      {/* Dark overlay shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
        
        {/* Header shimmer */}
        <div className="absolute top-0 left-0 right-0 p-4 md:p-6 lg:p-8 z-20">
          <div className="flex justify-between items-center">
            {/* Logo shimmer */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-400/30 rounded-full animate-pulse"></div>
              <div className="h-6 w-24 bg-green-400/30 rounded animate-pulse"></div>
            </div>
            
            {/* Right side buttons shimmer */}
            <div className="flex items-center gap-3">
              <div className="h-8 w-20 bg-gray-600/50 rounded animate-pulse hidden sm:block"></div>
              <div className="h-10 w-16 bg-gray-600/50 rounded-full animate-pulse"></div>
              <div className="w-10 h-10 bg-green-400/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Main content shimmer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 z-20">
          <div className="max-w-2xl">
            {/* Title shimmer */}
            <div className="space-y-3 mb-6">
              <div className="h-8 md:h-12 lg:h-16 w-3/4 bg-gray-600/60 rounded animate-pulse"></div>
              <div className="h-8 md:h-12 lg:h-16 w-1/2 bg-gray-600/60 rounded animate-pulse"></div>
            </div>
            
            {/* Description shimmer */}
            <div className="space-y-2 mb-8">
              <div className="h-4 md:h-5 w-full bg-gray-700/50 rounded animate-pulse"></div>
              <div className="h-4 md:h-5 w-5/6 bg-gray-700/50 rounded animate-pulse"></div>
              <div className="h-4 md:h-5 w-4/5 bg-gray-700/50 rounded animate-pulse"></div>
              <div className="h-4 md:h-5 w-3/4 bg-gray-700/50 rounded animate-pulse"></div>
              <div className="h-4 md:h-5 w-2/3 bg-gray-700/50 rounded animate-pulse"></div>
            </div>
            
            {/* Buttons shimmer */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="h-12 md:h-14 w-32 md:w-36 bg-green-400/40 rounded-lg animate-pulse"></div>
              <div className="h-12 md:h-14 w-32 md:w-36 bg-gray-600/40 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Side content shimmer (for the character image area) */}
        <div className="absolute right-0 top-1/4 bottom-1/4 w-1/3 hidden lg:block">
          <div className="h-full bg-gradient-to-l from-gray-600/30 to-transparent rounded-l-3xl animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-500/20 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade shimmer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      
      {/* Custom shimmer animation styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default HeroShimmerUi;