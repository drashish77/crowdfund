const About = (props) => {
  return (
    <div className='my-16'>
      <div className='w-5/6 md:w-1/2 m-auto bg-white rounded px-10 py-6'>
        <div className=''>
          <h1 className='text-2xl md:text-3xl font-bold pt-8'>
            About this project
          </h1>
          <p className='text-gray-500 my-6'>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className='text-gray-500 my-6'>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default About
