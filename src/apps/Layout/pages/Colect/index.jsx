import React from 'react'
import Footer from '../../../../colect/Footer'
import Header from '../../../../colect/Header'
import Main from '../../../../colect/Main'
import Slider from '../../../../components/Slider/Slider'

const Colect = () => {
  
  return (
    <div>
      <div>
        <Header />
        <div>
          <Slider />
        </div>
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Colect






