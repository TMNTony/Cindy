import axios from "axios";
export default {
    get_profile(){
        return axios.get("/profile")
    },
    create_profile(profile){
        return axios.post("/profile/createProfile", profile)
    },
    update_profile(id, profile){
        return axios.put(`/profile/updateProfile/${id}`, profile)
    },
    delete_profile(id){
        return axios.delete(`/profile/deleteProfile/${id}`)
    }
}