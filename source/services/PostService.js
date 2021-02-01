//var json = require('../../db.json');
import axios from "axios";
import { URL } from "./_config";

class PostService {
    async GetAll() {
        /*
        try {
            var response = await axios.get(URL + "posts");
            return response.data;
        }
        catch (err) {
            console.log(err)
            return json.posts
        }*/
        return []
    }
    async Add(post) {
        /*
        post.date = new Date().toString();
        post.id = Math.floor(Math.random() * 100000);
        try {
            var response = await axios.post(URL + "posts", post);
            return response.data
        }
        catch (err) {
            console.log(err)
        }*/
        return {}
    }
    async Delete(id) {
        /*
        try {
            var response = await axios.delete(URL + "posts/" + id.toString());
            return response.data
        }
        catch (err) {
            console.log(err)
        }*/
        return {}
    }
}

export default new PostService();