import axios from "axios";

export default {
    get_videos(){
        return axios.get("/videos")
    },
    create_video(video){
        return axios.post("/videos/createVideo", video)
    },
    update_video(id, video){
        return axios.put(`/videos/updateVideo/${id}`, video)
    },
    delete_video(id){
        return axios.delete(`/videos/deleteVideo/${id}`)
    }
}