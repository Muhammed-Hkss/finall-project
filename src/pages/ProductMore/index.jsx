import React from 'react'
import { useParams } from 'react-router-dom'
import cls from './ProductMore.module.scss'
import Header from './../../colect/Header/index';
import {  GetMoreData, getUsersMore, postMessage, postToLike} from '../../api';
import { Button , CircularProgress, Grid , Rating ,TextField } from "@mui/material";
import Tabs from '../../components/Tabs';
import { postToCart } from './../../api/index';
import { useAuth } from '../../providers/useAuth';
import { GrFavorite } from 'react-icons/gr'
import DownloadLink from 'react-download-link';
import {Controller, useForm} from "react-hook-form";
import CardsMore from '../../components/CardsMore';
import useAlert from '../../hooks/useAlert';



const ProductMore = () => {
  const { more , users , setAlertErrors } = useAuth()
  const [moreData , setMoreData] = React.useState(null)
  const [dataMessage , setDataMessage] = React.useState(null)
  const [updateData , setUpdateData] = React.useState(false)
  const {handleSubmit , control , reset} = useForm()
  const { actions } = useAlert()
  const {id} = useParams()
  

  


  const onSubmit = (value) => {
    if(id){
      const data = {...value , id: users.id , date: new Date().toLocaleDateString(), names: users.name , photoURL:users?.photoURL}
      postMessage(id ,{...moreData?.message , ...data} , more?.directionGamer).then(res => {
        setUpdateData(item => !item)
        reset()
      })
    }else {
      setAlertErrors(true)
    }
  }


  React.useEffect(() => {
    getUsersMore(more?.id , more?.directionGamer)
    .then(res => setMoreData(res?.data))
  }, [more , updateData])



  React.useEffect(() => {
    if(moreData?.message){
      setDataMessage(Object.values(moreData.message))
    }
  }, [moreData])


  React.useEffect(() => {
    GetMoreData(id)

    .then(r => {
      setMoreData(r.data);
    })
  }, [])
  


  // if(!moreData) return <Loader />

  if(!moreData) return <Grid display={"flex"} justifyContent={"center"} alignItems={'center'} height={'80vh'}><CircularProgress /></Grid>

  return (
    <React.Fragment>


      <div>
        <Header />
      </div>
      <div className={cls.row}>
        <div className={cls.more_img}>
          <img className={cls.list_img} src={moreData.url} alt="" />
        </div>
        

        <div className={cls.text_name}>
          <p className={cls.name}>КУПИТЬ - { moreData.name }</p>
          <div className={cls.shop}>
            <button className={cls.basket_btn} onClick={() => postToCart(users.id , moreData , id ,  actions.sweetAlert('щас щас'))}>в корзину</button>
            <p className={cls.price}>
              { moreData.price } 
              {
                moreData.price === '' ? <DownloadLink 
                label='Download'
                filename="fileName.txt"
                exportFile={() => ( moreData.about )}
                /> : ''
              }
              $
            </p>
          </div>
          <div className={cls.text_item}>
            <p>Жанр - { moreData.genre }</p>
            <p>Платформа - { moreData.platform }</p>
            <p>Дата выхода - { moreData.releaseDate }</p>
            <button className={cls.favorite_btn} onClick={() =>  postToLike( users.id , moreData , id , actions.sweetAlert('süüüüüü'))}>  <GrFavorite />  </button>
 
          </div>
        </div>
      </div>
      <div className={cls.tabs}>
        <Tabs />
      </div>
      <div
        className={cls.cards_footer}
        style={{padding:' 0 1.4%'}}
      >
        <form 
          onSubmit={handleSubmit(onSubmit)}
          style={{ width:'30%' , background:'white' , borderRadius:'25px' , padding:'20px'}}
        >
          <div style={{ display:'grid' ,  justifyContent:'center' , alignItems:'center' ,}}>
            <div className={cls.rating}>
              <Controller 
                name={'rating'}
                control={control}
                render={({field}) => (
                  <Grid display={'flex-start'} style={{marginBottom: '10px'}}>
                    <Rating 
                      onChange={e => field.onChange(e)}
                      name="size-large" 
                      defaultValue={0} 
                      size="large"
                    />
                  </Grid>
                )}
              />
            </div>
            <div className={cls.inputs} >
                <Controller
                  name={'message'}
                  control={control}
                  defaultValue={''}
                  style={{color: 'white' }}
                  render={({field}) => (
                    <TextField
                      style={{ background:'white' , color: 'white'}}
                      onChange={event => field.onChange(event)}
                      fullWidth={true}
                      required
                      id="filled-required"
                      label="Отзыв"
                      defaultValue=""
                      variant="filled"
                    />
                  )}
                />
            </div>
            <Button className={cls.btn} style={{width: '100%' , marginTop: '10px'}} variant={'outlined'} type={"submit"}>Оставить комментарий</Button>
          </div>
        </form>
      </div>

      <div className={cls.container_message}>
        {
          dataMessage && dataMessage.map((item , index) => <div key={index}>
            <hr style={{color:'white' , margin:' 10px 20px'}} />
            <CardsMore 
              cls={cls} 
              rating={item.rating} 
              message={item.message} 
              photoURL={item.photoURL} 
              names={item.names}
              date={item.date}
            />
          </div>
          )
        }
      </div>


    </React.Fragment>
    
  )
}

export default ProductMore


