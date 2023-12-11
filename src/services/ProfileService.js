import axios from "axios";
const url = "http://localhost:3001/profile"
export default {
    get_profile(){
        return axios.get(url)
    },
    create_profile(profile){
        return axios.post(url + "/createProfile", profile)
    },
    update_profile(id, profile){
        return axios.put(url + `/updateProfile/${id}`, profile)
    },
    delete_profile(id){
        return axios.delete(url + `/deleteProfile/${id}`)
    }
}