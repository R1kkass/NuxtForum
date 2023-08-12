<template>
    <h1>ewqewq</h1>
    <div v-for="p in pros">
        <p>{{ p.title }}</p>
    </div>
</template>

<script setup>
import axios from "axios";
// const { data: products } = await useFetch("https://fakestoreapi.com/products");
const { data: pros } = await axios.get("https://fakestoreapi.com/products");
</script>
