import pledges from '../components/pledges'
import React, { useState, createContext } from 'react'
export const PledgeContext = createContext()

const Context = ({ children }) => {
  //   //Grand Total data
  let totalFundRequired = 100000
  let totalFundCollected = 89914
  let totalInitialBaker = 5007
  let totalDaysLeft = 56
  const [fundRequired, setfundRequired] = useState(totalFundRequired)
  const [fundCollected, setFundCollected] = useState(totalFundCollected)
  const [totalBackers, settotalBackers] = useState(totalInitialBaker)
  const [daysLeft, setdaysLeft] = useState(totalDaysLeft)

  // data according to collection
  const [pledge, setPledge] = useState(pledges)
  //quantity of each product
  //total Quantity
  const [bambooTotalQuantity, setBambooTotalQuantity] = useState(
    pledges.bamboo.totalQuantity
  )
  const [blackTotalQuantity, setBlackTotalQuantity] = useState(
    pledges.black.totalQuantity
  )
  const [mahoganyTotalQuantity, setMahoganyTotalQuantity] = useState(
    pledges.mahogany.totalQuantity
  )
  //quantitySold
  const [bambooQuantitySold, setBambooQuantitySold] = useState(
    pledges.bamboo.quantitySold
  )
  const [blackQuantitySold, setBlackQuantitySold] = useState(
    pledges.black.quantitySold
  )
  const [mahoganyQuantitySold, setMahoganyQuantitySold] = useState(
    pledges.mahogany.quantitySold
  )

  //Amount of each product
  const [bambooAmount, setBambooAmount] = useState(pledges.bamboo.amount)
  const [blackAmount, setBlackAmount] = useState(pledges.black.amount)
  const [mahoganyAmount, setMahoganyAmount] = useState(pledges.mahogany.amount)
  return (
    <PledgeContext.Provider
      value={{
        fundRequired,
        setfundRequired,
        fundCollected,
        setFundCollected,
        totalBackers,
        settotalBackers,
        daysLeft,
        setdaysLeft,
        pledge,
      }}
    >
      {children}
    </PledgeContext.Provider>
  )
}

export default Context

// const [bambooAmount, setBambooAmount] = useState(pledges.bamboo.amount)
// const [blackAmount, setBlackAmount] = useState(pledges.black.amount)
// const [mahoganyAmount, setMahoganyAmount] = useState(pledges.mahogany.amount)
