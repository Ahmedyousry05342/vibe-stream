

function Title({title,overview}) {
    
  return (
    
    <div className='absolute bg-gradient-to-r from-black  w-full h-[100vh] pt-96 pl-20'>
        <h1 className='text-white text-3xl font-bold mb-1'>{title}</h1>
        <p className='text-gray-400 text-sm mb-4 w-1/4'>{overview}</p>
        <div className='flex gap-2'>
            <button className='bg-white px-12 py-2 rounded-md flex items-center gap-1 cursor-pointer hover:bg-gray-300'> <img className="w-3 h-3" src="https://icons.veryicon.com/png/o/miscellaneous/winsion/play-button-6.png" alt="" />Play</button>
            <button className='bg-gray-300/50 text-white px-12 py-2 rounded-md cursor-pointer hover:bg-gray-300/80 hover:text-black'>More Info</button>
        </div>
    </div>
    
  )
}

export default Title