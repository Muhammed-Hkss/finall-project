import React from 'react';
import {Rating} from "@mui/material";
// import { useAuth } from '../../providers/useAuth';

const CardsMore = ({rating , photoURL , names , date , message , cls }) => {
  // const { users } = useAuth()



  return (
    <div style={{ margin:' 10px 20px' }} className={cls.cards}>
      <div className={cls.cards_header}>
        <div style={{ display:'flex' }}>
          <div style={{ width:'15%' , height:'15%' , display:'flex' , gap:'20px' }} className={cls.logo_image}>
            <img style={{ objectFit:'cover' , width:'25%' , borderRadius:'50%' }} src={photoURL} alt=""/>
          </div>
          <div>
            <p  style={{ color:'white' }}>{date}</p>
            <p  style={{ color:'white' }} className={cls.name_list}>{names}</p>
          </div>
        </div>
        <div style={{ color:'white'}} className={cls.info_list}>
          <Rating className={cls.rating} disabled={true} name="size-large" value={rating++} size="large" />
        </div>
      </div>
      <div style={{ color:'wheat'}} className={cls.cards_body}>
        <p>
          {message}
        </p>
      </div>
    </div>
  );
};

export default CardsMore;

