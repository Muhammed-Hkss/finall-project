import React from 'react'
import { GetMoreData } from '../../api'
import Loader from '../Loader'
import './Tabs.css'
import { useParams } from 'react-router-dom'


const Tabs = () => {
  const [moreData , setMoreData] = React.useState(null)
  const {id} = useParams()

  React.useEffect(() => {
    GetMoreData(id)

    .then(r => {
      setMoreData(r.data);
    })
  }, [])


  if(!moreData) return <Loader />
  return (
    <div>
      <div className="warpper">
        <input className="radio" id="one" name="group" type="radio"  />
        <input className="radio" id="two" name="group" type="radio" />
        <input className="radio" id="three" name="group" type="radio" />
        <div className="tabs">
        <label className="tab" id="one-tab" htmlFor="one">ОБ ИГРЕ</label>
        <label className="tab" id="two-tab" htmlFor="two">СИСТЕМНЫЕ ТРЕБОВАНИЯ</label>
        <label className="tab" id="three-tab" htmlFor="three">АКТИВАЦИЯ</label>
        </div>
        <div className="panels">
          <div className="panel" id="one-panel">
              <div className="panel-title">{ moreData.genre }</div>
              <p>{ moreData.about }</p>
          </div>
          <div className="panel" id="two-panel">
              <div className="panel-title">Минимальные системные требования</div>
              <p>ОС - { moreData.Os}</p>
              <p>Процессор - { moreData.processor}</p>
              <p>Оперативная память - { moreData.RAM}</p>
              <p>Видеокарта - { moreData.videoCard}</p>
              <p>DirectX - { moreData.diskSpace}</p>
              <p>Место на диске - { moreData.soundCard}</p>

          </div>
          <div className="panel" id="three-panel">
              <div className="panel-title">Note on Prerequisites</div>
              <p>Скопируйте ключ приобретённой игры из раздела «Заказы» в личном кабинете.</p>
              <p>Если у вас не установлен клиент Steam, скачайте и установите его.</p>
              <p>Войдите в свой аккаунт Steam или зарегистрируйте новый, если у вас его нет.</p>
              <p>Перейдите в раздел «Игры» и выберите «Активировать через Steam...».</p>
              <p>Введите ключ активации.</p>
              <p>После этого игра будет в вашей библиотеке Steam, и вы сможете её скачать.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs

