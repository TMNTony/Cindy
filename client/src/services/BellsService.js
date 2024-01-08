import axios from "axios";

const url = "http://localhost:3001/bells"

export default {
    get_content(){
        return axios.get(url)
    },
    update_content(content){
        return axios.put(url + `/updateContent`, content)
    }
}