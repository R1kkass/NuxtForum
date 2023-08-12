<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import Api from "./shared/Api";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap");

* {
    box-sizing: border-box !important;
    padding: 0;
    margin: 0;
}

body {
    font-family: "Montserrat", sans-serif;
    background-color: rgb(31, 31, 31);
}
</style>
