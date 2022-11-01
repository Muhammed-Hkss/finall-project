
import React from 'react'
import { useCards } from '../../apps/Layout/Hooks/useCards'
import CreateForm from '../../components/CreateForm'
import cls from './AdminPanel.module.scss'

const AdminPanel = () => {

  const { actions , isLoading } = useCards()
  
  const [name , setName] = React.useState('')
  const [price , setPrice] = React.useState('')
  const [url , setUrl] = React.useState('')
  const [genre , setGenre] = React.useState('')
  const [platform , setPlatform] = React.useState('')
  const [releaseDate , setReleaseDate] = React.useState('')
  const [about , setAbout] = React.useState('')
  const [Os , setOs] = React.useState('')
  const [processor , setProcessor] = React.useState('')
  const [RAM , setRAM] = React.useState('')
  const [videoCard , setVideoCard] = React.useState('')
  const [diskSpace , setDiskSpace] = React.useState('')
  const [soundCard , setSoundCard] = React.useState('')
  const [tag , setTag] = React.useState('')







  const handelSubmit = e => {
    e.preventDefault()


    actions.post({
      name,
      price,
      url,
      genre,
      platform,
      releaseDate,
      about,
      Os,
      processor,
      RAM,
      videoCard,
      diskSpace,
      soundCard,
      count: 1,
      tag,
    })

  }
  return (
    <React.Fragment>
      
      

      <div className={cls.row}>
        
        <CreateForm 
          name={name}
          setName={setName}
          price={price}
          setPrice={setPrice}
          url={url}
          setUrl={setUrl}
          onSubmit={handelSubmit}
          genre={genre}
          setGenre={setGenre}
          platform={platform}
          setPlatform={setPlatform}
          releaseDate={releaseDate}
          setReleaseDate={setReleaseDate}
          about={about}
          setAbout={setAbout}

          Os={Os}
          setOs={setOs}
          processor={processor}
          setProcessor={setProcessor}
          RAM={RAM}
          setRAM={setRAM}
          videoCard={videoCard}
          setVideoCard={setVideoCard}
          diskSpace={diskSpace}
          setDiskSpace={setDiskSpace}
          soundCard={soundCard}
          setSoundCard={setSoundCard}
          tag={tag}
          setTag={setTag}
        />

      </div>
    </React.Fragment>
  )
}

export default AdminPanel



