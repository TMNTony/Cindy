import axios from "axios";
const url = "http://localhost:3001/videos"

export default {
    get_videos(){
        return axios.get(url)
    },
    create_video(video){
        return axios.post(url + "/createVideo", video)
    },
    update_video(id, video){
        return axios.put(url `/updateVideo/${id}`, video)
    },
    delete_video(id){
        console.log(id)
        return axios.delete(url +`/deleteVideo/${id}`)
    }
}