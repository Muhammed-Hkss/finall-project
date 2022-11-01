import instance, { API } from "./api";

export const createCard = ( data ) => API.post(`cards`, data)

export const deleteToCards = ( id ) => API.delete(`cards/${id}`)

export const getGamesData = () => API.get('cards')

export const GetMoreData = ( id ) => API.get(`cards/${id}`)

export const createNewUser = (userId, data) => instance.put(`/users/${userId}.json`, data)

export const postToCart = (userId,  data, id) => API.put(`users/${userId}/cart/${id}`, data)

export const getToCart = (userId) => API.get(`/users/${userId}/cart`)

export const deleteFromCart = ( userId, id ) => API.delete(`/users/${userId}/cart/${id}`)

export const postToLike = (userId,  data , id) => API.put(`users/${userId}/like/${id}`, data)

export const getToLike = (userId) => API.get(`/users/${userId}/like`)

export const deleteFromLike = ( userId, id ) => API.delete(`/users/${userId}/like/${id}`)

export const getUsersMore = (id) => instance.get(`cards/${id}/.json`)

export const postMessage = ( id , data ) => instance.post(`cards/${id}/message/.json` , data)


export const getUser = (userId) => instance.get(`/users/${userId}/.json`)

export const updatePrfile = (userId, data) => instance.patch(`/users/${userId}/user/.json`, data)


export const getPhoto = (userId) => instance.get(`/users/${userId}/user/.json`)











export const orderProduct = (data) => instance.post(`/orders/.json`, data)

export const getOrderedProducts = () => instance.get(`orders/.json`)











