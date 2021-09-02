const Card2 = (props) => {
  const { fundRequired, fundCollected, totalBackers, daysLeft } = props
  let fundCal = ((fundRequired - fundCollected) / fundRequired) * 100
  let progress = 100 - fundCal

  return (
    <div className='my-16'>
      <div className='w-5/6 md:w-1/2 m-auto bg-white rounded px-10 py-6'>
        <div className='flex flex-col items-center text-center divide-y divide-gray-400 lg:flex-row lg:justify-around lg:divide-x lg:divide-y-0'>
          <div className='py-6 lg:w-1/3'>
            <h1 className='text-3xl tracking-tight font-bold'>
              ${fundCollected}
            </h1>
            <p className='text-gray2'>of ${fundRequired} backed</p>
          </div>

          <div className='py-6 lg:w-1/3'>
            <h1 className='text-3xl tracking-tight font-bold'>
              {totalBackers}
            </h1>
            <p className='text-gray2'>total backers</p>
          </div>
          <div className='py-6 lg:w-1/3'>
            <h1 className='text-3xl tracking-tight font-bold'>{daysLeft}</h1>
            <p className='text-gray2'>days left</p>
          </div>
        </div>

        <div className='my-6 h-3 relative  rounded-full overflow-hidden'>
          <div className='w-full h-full bg-gray-200 rounded-full absolute'></div>
          <div
            className='h-full bg-cyan-moderate absolute rounded-full'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Card2
