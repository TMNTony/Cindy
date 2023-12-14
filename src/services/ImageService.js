import axios from "axios";

const url = "http://localhost:3001/upload"

export default {
    get_images(){
        return axios.get(url)
    },
    upload_image(image){
        return axios.post(url, image, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    },
    delete_image(id){
        return axios.delete(url + `/deleteImage/${id}`)
    },
    update_image(id, image){
        return axios.put(url + `updateImage/${id}`, image)
    }
}