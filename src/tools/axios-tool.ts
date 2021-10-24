import axios from 'axios';

export default axios.create({
  // baseURL: 'https://api.pexels.com/v1/',
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Content-Type': 'application/json',
    // Authorization: '563492ad6f91700001000001487a346a73fc4c6db970d94936468040',
    Authorization: 'Client-ID PZhk6AEZji__46qCxuJ3MNrI0UDrA6jPs4oOQ9q5YLY',
  },
});
