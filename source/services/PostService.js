var json = require('../../db.json');
import axios from "axios";
import { URL } from "./_config";

class PostService {
    async GetAll() {
        var response = await axios.get(URL + "posts");
        if (response.status == 200) {
            return response.data;
        }
        else {
            json.posts
        }
    }
    async Add(post) {
        post.date = new Date().toString();
        post.id = Math.floor(Math.random() * 100000);

        var response = await axios.post(URL + "posts",post);
        return response.data
    }
    async Delete(id) {
        var response = await axios.delete(URL + "posts/" + id.toString());
        return response.data
    }
}

export default new PostService();