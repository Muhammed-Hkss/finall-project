import React from 'react'

const Dot = ({index , sliderIndex}) => {
  return (
    <div className={sliderIndex === index + 1 ? 'dotItem dotActive' : 'dotItem'}></div>
  )
}

export default Dot 