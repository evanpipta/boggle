import React, { useState, useEffect } from 'react'

const Timer = ({ initialTime }) => {

  const [timeRemaining, setTimeRemaining] = useState(180)

  useEffect(() => {
    if (initialTime) {
      setTimeRemaining(Math.floor(initialTime / 1000))
    }
  }, [initialTime])

  useEffect(() => {
    const updateTimeRemaining = setInterval(() => {
      setTimeRemaining(timeRemaining - 1)
    }, 1000)
    return () => clearInterval(updateTimeRemaining)
  })

  return (
    <p>{timeRemaining}</p>
  )
}

export default Timer
