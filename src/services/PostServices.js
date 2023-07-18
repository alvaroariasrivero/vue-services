import { ref } from "vue";

class PostService {
    posts

    constructor (){
        this.posts = ref([]);
    }

    getPosts(){
        return this.posts;
    }

    async fetchAll(){
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const response = await fetch(url);
            const data = await response.json();
            this.posts.value = await data;
        } catch (error) {
            console.log(error)
        }
    }
};

export default PostService;