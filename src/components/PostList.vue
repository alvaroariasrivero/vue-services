<script setup>
    import PostService from '../services/PostServices';
    import { onMounted } from 'vue'

    const service = new PostService();
    const posts = service.getPosts();

    onMounted(async () => {
        await service.fetchAll();
    });

</script>

<template>
    <h1>Listado de posts</h1>
    <ul class="post-list">
        <li v-for="post in posts">{{ post.title }}</li>
    </ul>
</template>

<style scoped>

</style>