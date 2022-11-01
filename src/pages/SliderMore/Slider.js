import React from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../components/DB'
import { ListItem } from '../../components/DB/api'
import Button from './Button'
// import Dot from './Dot'
import './Slider.css'
// import { ImgList } from './Utils'

const SliderMore = () => {
  const [sliderIndex, setSliderIndex] = React.useState(1)

  const {id} = useParams()

  const base = getProduct().find(item => item.id == id)

const nextSlide = () => {
  if(sliderIndex !== ListItem.length){
    setSliderIndex(sliderIndex + 1)
  }else if(sliderIndex === ListItem.length){
    setSliderIndex(1)
  }
}

const prevSlide = () => {
  if(sliderIndex !== 1){
    setSliderIndex(sliderIndex - 1)
  }else if(sliderIndex === 1){
    setSliderIndex(ListItem.length)
  }
}


return (
    <>
      <div className='slider'>
        <div className='slider_button_blog '>
            <Button direction="prev" handelSlide={prevSlide}/>
            <p>{base.name}</p>
            <Button direction="next" handelSlide={nextSlide}/>
        </div>
          {/* <div className='line_parent'>
            {
              Array.from({length:3}).map((dot , index) => <Dot index={index} key={index} sliderIndex={sliderIndex}/>)
            }
          </div> */}
          <div className='slider_parent'>
            {
              ListItem.map((img , index) => <img src={img.ListImg} key={img.id} className={sliderIndex === index + 1 ? "sliderImg active" : "sliderImg"}/>)
            }
        </div>
      </div>
    </>
  )
}

export default SliderMore




