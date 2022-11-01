import React from 'react'
import cls from './SearchDesktop.module.scss'
import axios from 'axios';
import { Link } from 'react-router-dom'


const SearchDesktop = () => {

  const [data , setData] = React.useState([])

  const [input , setInput] = React.useState('')

  const [output , setOutput] = React.useState([])


  




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
        // console.log(newData);
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
      <div>
      <div className={cls.search__from}>
        <input 
          className={cls.search__input}
          onChange={e => setInput(e.target.value)}
          type="text" 
          placeholder="Search"
        />

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
    </div>
  )
}

export default SearchDesktop

