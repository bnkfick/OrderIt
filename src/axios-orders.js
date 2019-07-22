import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-doodad.firebaseio.com/'
});

export default instance;