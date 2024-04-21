import axios from 'axios';

const url = "https://server.chamblesshornstudio.com/"
export default {

    login(user) {
        return axios.post(url + "/login", user)
    },
    register(user){
        return axios.post(url + "/register", user)
    }

}