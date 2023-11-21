import axios from "axios";

export default {
    get_pictures(){
        return axios.get("/pictures")
    },
    create_picture(picture){
        return axios.post("/pictures/createPicture", picture)
    },
    update_picture(id, picture){
        return axios.put(`/pictures/updatePicture/${id}`, picture)
    },
    delete_picture(id){
        return axios.delete(`/pictures/deletePicture/${id}`)
    }
}