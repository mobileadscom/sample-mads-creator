import axios from 'axios'

const getImages = async () => {
  return await axios.get('https://jsonplaceholder.typicode.com/photos')
}

export {
  getImages
}
