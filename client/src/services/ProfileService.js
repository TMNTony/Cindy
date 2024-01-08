import axios from "axios";
const url = "http://localhost:3001/profile"
export default {
    get_profile(){
        return axios.get(url)
    },
    update_profile(profile){
        return axios.put(url + `/updateProfile`, profile)
    },
}