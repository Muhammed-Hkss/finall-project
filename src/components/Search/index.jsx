import React from 'react'
import cls from './Search.module.scss'
import axios from 'axios';
import { Link } from 'react-router-dom'


const Search = () => {

  const [data , setData] = React.useState([])
  const [input , setInput] = React.useState('')
  // const [dropDown , setDropDown] = React.useState(null)
  const [output , setOutput] = React.useState([])



  // React.useEffect(() => { setDropDown('all') } , [])


  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://database-72d13-default-rtdb.firebaseio.com/cards.json")
      {
        const newData = Object.entries(res.data).map(([id, item]) => {
          return{
            id,
            ...item
          }
        })
        setData(newData)
      }
    }
  
    getData()
  }, [])
  
  
  
  React.useEffect(() => {
    setOutput([])
    data.filter(value => {
      if(value.name.toLowerCase().includes(input.toLowerCase()))
      { 
        setOutput(output => [...output, value])
      }
    })
  }, [input])
  

  return (
    <div>
      <div className={cls.container}>
        <div className={cls.search_box}>
          <input 
            type="text" 
            onChange={e => setInput(e.target.value)} 
          />
          <span></span>
          {/* <label>{dropDown === 'all'
            ? 'Поиск'
            : `Поиск по ${listPlaceholder[dropDown]}`
          }</label> */}
        </div>
        {/* <select
          className={cls.select}
          onChange={event => setDropDown(event.target.value)}
        >
          {
            categoryOptions.map(item => <option key={item.value} value={item.value}>{item.label}</option>)
          }
        </select> */}



        <div className={cls.datacomplate}>
            <ul className={cls.autocomplate}>
              {
                input
                ? output.map(item  => {
                  return (
                    <li key={item.id} className={cls.autocomplate_item}>
                      
                      <Link to={`/product/${item.id}`} className={cls.link_btn}>{item.name}</Link> 
                    </li>
                  )
                })
                : null
              }
            </ul>
        </div>



      </div>
    </div>
  )
}

export default Search



