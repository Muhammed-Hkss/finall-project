import React from 'react'
import Button from './Button'
import Dot from './Dot'
import './Slider.css'
import { ImgList } from './Utils'

const Slider = () => {
  const [sliderIndex, setSliderIndex] = React.useState(1)

const nextSlide = () => {
  if(sliderIndex !== ImgList.length){
    setSliderIndex(sliderIndex + 1)
  }else if(sliderIndex === ImgList.length){
    setSliderIndex(1)
  }
}

const prevSlide = () => {
  if(sliderIndex !== 1){
    setSliderIndex(sliderIndex - 1)
  }else if(sliderIndex === 1){
    setSliderIndex(ImgList.length)
  }
}


return (
    <>
      <div className='slider'>
        <div className='slider_parent'>
          {
            ImgList.map((img , index) => <img src={img.url} key={img.id} className={sliderIndex === index + 1 ? "sliderImg active" : "sliderImg"}/>)
          }
            {
              ImgList.map((item , index) => <p key={item.id} className={sliderIndex === index + 1 ? "sliderText active" : "sliderText"}>
                {item.text}
                <br/>
                {item.price}
              </p>
              )
            }
          <div className='slider_button_blog '>
            <Button direction="prev" handelSlide={prevSlide}/>
            <Button direction="next" handelSlide={nextSlide}/>
          </div>
          <div className='line_parent'>
            {
              Array.from({length:3}).map((dot , index) => <Dot index={index} key={index} sliderIndex={sliderIndex}/>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider




