import axios from "axios";
const url = "https://server.chamblesshornstudio.com/profile"
export default {
    get_profile(){
        return axios.get(url)
    },
    update_profile(profile){
        return axios.put(url + `/updateProfile`, profile)
    },
}