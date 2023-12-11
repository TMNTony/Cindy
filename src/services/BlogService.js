import axios from "axios";

const url = "http://localhost:3001/blogs"
export default {
    get_blog(id) {
        return axios.get(url + `/${id}`)
    },
    get_blogs() {
        return axios.get(url)
    },
    create_blog(blog) {
        return axios.post(url + '/createBlog', blog)
    },
    update_blog(id, blog) {
        return axios.put(url + `/updateBlog/${id}`, blog)
    },
    delete_blog(id) {
        return axios.delete(url + `/deleteBlog/${id}`)
    }
}