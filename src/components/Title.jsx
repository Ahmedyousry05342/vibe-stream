

function Title({title,overview}) {
    
  return (
    
    <div className='absolute bg-gradient-to-r from-black  w-full h-[100vh] pt-16 md:pt-60 pl-8 md:pl-20'>
        <h1 className='text-white text-lg md:text-3xl font-bold mb-1'>{title}</h1>
        <p className='text-gray-400 text-sm mb-4 w-1/4 hidden md:block '>{overview}</p>
        <div className='flex gap-2'>
            <button className='bg-white md:px-12 px-3 md:py-2 text-[14px] md:text-lg rounded-md flex items-center gap-0.5 cursor-pointer hover:bg-gray-300'> <img className="w-3 h-3" src="https://icons.veryicon.com/png/o/miscellaneous/winsion/play-button-6.png" alt="" />Play</button>
            <button className='bg-gray-300/50 text-white px-1 text-[14px] md:text-lg md:px-12 py-2 rounded-md cursor-pointer hover:bg-gray-300/80 hover:text-black'>More Info</button>
        </div>
    </div>
    
  )
}

export default Title