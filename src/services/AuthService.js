import axios from 'axios';

const url = "http://localhost:3001/login"
export default {

    login(user) {
        return axios.post(url, user)
    },

}