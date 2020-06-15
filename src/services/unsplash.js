import axios from 'axios'

let unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 5lOuz6LQzm8KwbCaYmyz3dGOoCP4I9aKFXrUkRvh7O0'
  }
})

export default unsplash