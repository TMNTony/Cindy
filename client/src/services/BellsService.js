import axios from "axios";

const url = "https://server.chamblesshornstudio.com/bells"

export default {
    get_content(){
        return axios.get(url)
    },
    update_content(content){
        return axios.put(url + `/updateContent`, content)
    }
}