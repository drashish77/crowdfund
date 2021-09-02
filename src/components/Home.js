import { useState } from 'react'
import About from './About'
import AboutCard from './AboutCard'
import Card2 from './Card2'
import CardHero from './CardHero'
import pledges from './pledges'

const Home = () => {
  //Grand Total data
  const [fundRequired, setfundRequired] = useState(100000)
  const [fundCollected, setFundCollected] = useState(899914)
  const [totalBackers, settotalBackers] = useState(5007)
  const [daysLeft, setdaysLeft] = useState(56)

  // data according to collection
  const [bambooAmount, setBambooAmount] = useState(pledges.bamboo.amount)
  const [blackAmount, setBlackAmount] = useState(pledges.black.amount)
  const [mahoganyAmount, setMahoganyAmount] = useState(pledges.mahogany.amount)

  return (
    <div className=''>
      <div className='relative w-5/6 md:w-1/2 mx-auto bg-white rounded-lg px-10 pb-16 mb-6 -mt-20'>
        <CardHero />
      </div>
      <Card2
        fundRequired={fundRequired}
        fundCollected={fundCollected}
        totalBackers={totalBackers}
        daysLeft={daysLeft}
      />
      <About>
        <AboutCard
          name={pledges.bamboo.name}
          amount={pledges.bamboo.amount}
          description={pledges.bamboo.description}
          totalQuantity={pledges.bamboo.totalQuantity}
          quantitySold={pledges.bamboo.quantitySold}
        />
        <AboutCard
          name={pledges.black.name}
          amount={pledges.black.amount}
          description={pledges.black.description}
          totalQuantity={pledges.black.totalQuantity}
          quantitySold={pledges.black.quantitySold}
        />
        <AboutCard
          name={pledges.mahogany.name}
          amount={pledges.mahogany.amount}
          description={pledges.mahogany.description}
          totalQuantity={pledges.mahogany.totalQuantity}
          quantitySold={pledges.mahogany.quantitySold}
        />
      </About>
    </div>
  )
}

export default Home
