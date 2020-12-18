import React from 'react'
import useWindowSize from "react-use-window-size"
import Confetti from 'react-confetti'
 
export default () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={2000}
      recycle={false} 
      numberOfPieces={1000}
    />
  )
}