import { cardsList } from '../../utils/List'
import cls from './Card.module.scss'
// import { cardsList } from '../colect/Mai'



function MainCards(){
  return(
    <div className={cls.advantages}>
      {
        cardsList.map(item => <div key={item.id}>
          <div className={cls.advantages_item_item}>
            <div className={cls.advantages_item_img}>
              <img className={cls.advantages_img} src={item.url} alt="" />
            </div>
              <div className={cls.advantages_item_text}>
                <p>{item.title}</p>
                <p>{item.subTitle}</p>
              </div>
            </div>
          </div>)
      }
    </div>
  )
}


export default MainCards

