function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-8">
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-2">
            <span className="text-gray-300 text-sm">Made with</span>
            <svg className="w-4 h-4 text-[#00ff00] animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium text-sm">by Rehan</span>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient line */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
    </footer>
  )
}

export default Footer