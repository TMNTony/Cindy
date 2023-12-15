import axios from 'axios';

const url = "http://localhost:3001"
export default {

    login(user) {
        return axios.post(url + "/login", user)
    },
    register(user){
        return axios.post(url + "/register", user)
    }

}