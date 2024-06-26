import axios from "axios";
const url = "https://server.chamblesshornstudio.com/pictures"
export default {
    get_pictures(){
        return axios.get(url)
    },
    create_picture(picture){
        return axios.post(url + "/createPicture", picture)
    },
    update_picture(id, picture){
        return axios.put(url + `/updatePicture/${id}`, picture)
    },
    delete_picture(id){
        return axios.delete(url + `/deletePicture/${id}`)
    }
}