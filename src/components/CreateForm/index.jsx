import React from 'react'
import './CreateForm.css'
import { Box, Button } from "@mui/material";
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';




const  CreateForm = ({name , setName , price , setPrice , url , setUrl, genre , setGenre , platform , setPlatform , releaseDate , setReleaseDate , about , setAbout , Os , setOs , processor , setProcessor , RAM , setRAM , videoCard , setVideoCard , diskSpace , setDiskSpace , soundCard , setSoundCard , tag , setTag , onSubmit }) => {

  
const currencies = [
  {
    label:'',
  },
  {
    label: 'ГОНКИ',
  },
  {
    label: 'ОНЛАЙН',
  },
  {
    label: 'АНИМЕ',
  },
  {
    label: 'открытый мир',
  },
];


  return (

    <React.Fragment>
        <div>
          <Link  to='/order'> order</Link>
        </div>

       <div
        className='container-fluid d-flex justify-content-center align-items-center my-3'
        >

          <Box
            onSubmit={onSubmit}
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                type="text"  
                style={{background:'white'}}
                id="filled-basic" 
                label="Имя" 
                variant="filled" 
                value={name}
                onChange={e => setName(e.target.value)}
              />
              
              <TextField 
                type="text" 
                style={{background:'white'}}
                id="filled-basic" 
                label="Цена" 
                variant="filled" 
                value={price}
                onChange={e => setPrice(e.target.value)}
              />

              <TextField 
                type="url"
                style={{background:'white'}}
                id="filled-basic" 
                label="url" 
                variant="filled" 
                value={url}
                onChange={e => setUrl(e.target.value)}
              />

              <TextField 
                type="text" 
                style={{background:'white'}}
                id="filled-basic" 
                label="Жанр" 
                variant="filled" 
                value={genre}
                onChange={e => setGenre(e.target.value)}
              />

              <TextField
                type="text"  
                style={{background:'white'}}
                id="filled-basic" 
                label="Платформа" 
                variant="filled" 
                value={platform}
                onChange={e => setPlatform(e.target.value)}
              />


              <TextField 
                type="text" 
                style={{background:'white'}}
                id="filled-basic" 
                label="Дата выхода" 
                variant="filled" 
                value={releaseDate}
                onChange={e => setReleaseDate(e.target.value)}
              />
            </div>
            <div>
              <TextField 
                type="text" 
                style={{background:'white'}}
                id="filled-basic" 
                label="об игре" 
                variant="filled" 
                value={about}
                onChange={e => setAbout(e.target.value)}
              />

              <TextField 
                type="text" 
                style={{background:'white'}}
                id="filled-basic" 
                label="ОС" 
                variant="filled" 
                value={Os}
                onChange={e => setOs(e.target.value)}
              />


              <TextField 
                type="text" 
                style={{background:'white'}}
                id="filled-basic" 
                label="Процессор" 
                variant="filled" 
                value={processor}
                onChange={e => setProcessor(e.target.value)}
              />

              <TextField
                type="text"  
                style={{background:'white'}}
                id="filled-basic" 
                label="Оперативная память" 
                variant="filled" 
                value={RAM}
                onChange={e => setRAM(e.target.value)}
              />

              <TextField 
                type="text" 
                style={{background:'white'}}
                id="filled-basic" 
                label="Видеокарта" 
                variant="filled" 
                value={videoCard}
                onChange={e => setVideoCard(e.target.value)}
              />

              <TextField
                type="text"  
                style={{background:'white'}}
                id="filled-basic" 
                label="Место на диске" 
                variant="filled" 
                value={diskSpace}
                onChange={e => setDiskSpace(e.target.value)}
              />

              <TextField 
                type="text" 
                style={{background:'white'}}
                id="filled-basic" 
                label="Звуковая карта" 
                variant="filled" 
                value={soundCard}
                onChange={e => setSoundCard(e.target.value)}
              />
              <TextField
                type="text" 
                style={{background:'white'}}
                id="filled-select-currency-native"
                select
                label="Tag"
                value={tag}
                onChange={e => setTag(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                variant="filled"
              >
                {currencies.map((option , index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <Button 
                type='submit'
                variant="contained" 
                disableElevation
              >
                Добавить
              </Button>
            </div>
          </Box>
      </div>
    </React.Fragment>
  )
}

export default CreateForm

