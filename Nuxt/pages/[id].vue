<template>
    {{ posts.id }}
    <p v-for="post in posts.posts"></p>
</template>

<script setup>
import { $api } from "../app/interseption";

const { id } = useRoute().params;

const { data: posts } = await $api.get(`/theme/${id}`);
</script>
