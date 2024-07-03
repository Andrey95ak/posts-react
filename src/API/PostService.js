import axios from "axios";

export class PostService {
    static async fetchPosts() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            return response;
        } catch (e) {
            console.log(e);
        }
    }

    static async getByIdPost(id) {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
            return response;
        } catch (e) {
            console.log(e);
        }
    }

    static async getCommentsById(id) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            return response;
        } catch (e) {
            console.log(e);
        }
    }
}