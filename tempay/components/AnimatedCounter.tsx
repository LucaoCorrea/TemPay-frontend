"use client";

import CountUp from "react-countup";

export const AnimatedCounter = ({amount}:{amount: number}) => {
  return (
    <div>
     <CountUp 
     duration={2.5}
     decimal=","
     prefix="R$"
     end={amount}/>
    </div>
  )
}

export default AnimatedCounter