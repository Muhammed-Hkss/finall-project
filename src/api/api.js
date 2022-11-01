import axios from 'axios'

const BASE_URL = 'https://database-72d13-default-rtdb.firebaseio.com/'

export const API = {
  get : url => {
    // return fetch(`${BASE_URL}${url}.json` , {
    //   method: 'GET',
    //   headers:{
    //     'Content-type' : 'application/json'
    //   }
    // })

    return axios.get(`${BASE_URL}${url}.json`)
  },

  post: (url , data) => {
    return fetch(`${BASE_URL}${url}.json` , {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-type' : 'application/json'
      }
    }).then(res => res.json())
  },

  put: (url , data) => {
    return fetch(`${BASE_URL}${url}.json` , {
      method: 'PUT',
      body: JSON.stringify(data),
      headers:{
        'Content-type' : 'application/json'
      }
    }).then(res => res.json())
  },

  delete:(id , data) => {
    return fetch(`${BASE_URL}${id}.json`, {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers:{
        'Content-type' : 'application/json'
      }
    }).then(res => res.json())
  }
}


const instance = axios.create({baseURL: BASE_URL})


export default instance






