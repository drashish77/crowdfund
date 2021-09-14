import { useContext } from 'react'
import { PledgeContext } from '../context/DataContext'
import AboutCard from './AboutCard'

const About = () => {
  const {
    pledge: { bamboo, black, mahogany },
  } = useContext(PledgeContext)
  return (
    <div className='my-16' id='about'>
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
        <AboutCard
          name={bamboo.name}
          amount={bamboo.amount}
          description={bamboo.description}
          totalQuantity={bamboo.totalQuantity}
          quantitySold={bamboo.quantitySold}
        />
        <AboutCard
          name={black.name}
          amount={black.amount}
          description={black.description}
          totalQuantity={black.totalQuantity}
          quantitySold={black.quantitySold}
        />
        <AboutCard
          name={mahogany.name}
          amount={mahogany.amount}
          description={mahogany.description}
          totalQuantity={mahogany.totalQuantity}
          quantitySold={mahogany.quantitySold}
        />
      </div>
    </div>
  )
}

export default About
