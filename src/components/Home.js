import { useContext } from 'react'
import { PledgeContext } from '../context/DataContext'
import About from './About'
import AboutCard from './AboutCard'
import Card2 from './Card2'
import CardHero from './CardHero'

const Home = () => {
  //Grand Total data

  const {
    pledge: { bamboo, black, mahogany },
    fundRequired,
    setfundRequired,
    fundCollected,
    setFundCollected,
    totalBackers,
    settotalBackers,
    daysLeft,
    setdaysLeft,
  } = useContext(PledgeContext)

  return (
    <div className=''>
      <div className='relative w-5/6 md:w-1/2 mx-auto bg-white rounded-lg px-10 pb-16 mb-6 -mt-20'>
        {/* first card = Heading, subheading, bookmark */}
        <CardHero />
      </div>
      {/* second card = dataset */}
      <Card2
        fundRequired={fundRequired}
        fundCollected={fundCollected}
        totalBackers={totalBackers}
        daysLeft={daysLeft}
      />
      {/* 3rd card == About */}
      <About />
      <div className='flex justify-end'>
        <a
          href='#hero'
          className='btn mb-10 rounded-full p-4 bg-cyan-dark text-white mr-5 align-left'
        >
          Top
        </a>
      </div>
    </div>
  )
}

export default Home
