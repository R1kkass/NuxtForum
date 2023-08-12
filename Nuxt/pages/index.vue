<template>
    <div class="ThemeContainer">
        <NuxtLink v-for="theme in themes.data" :to="`/${theme.id}`">
            <div class="Theme">
                <p>
                    {{ theme.title }}
                </p>
                <p>
                    {{ theme.user }}
                </p>
            </div>
        </NuxtLink>
        <Pagination />
    </div>
</template>

<script setup>
import { $api } from "../app/interseption/index";
import Pagination from "../shared/Pagination/Pagination.vue";

let themes = ref(await $api.get("/theme?page=2&limit=10"));
const route2 = useRoute();

watch(
    () => route2.fullPath,
    async () => {
        themes=await $api.get(`/theme?page=${route2.query.page}&limit=10`)
    },
    // { deep: true, immediate: true }
);
</script>

<style lang="scss">
.ThemeContainer {
    width: 90%;
    margin: 0 auto;
    a {
        text-decoration: none;
    }
}

.Theme {
    height: 100px;
    background-color: rgb(60, 60, 60);
    margin-bottom: 2px;
    position: relative;
    border-radius: 5px;
    transform: scale(1);
    color: white;
    animation: steam 10s ease-in-out infinite;

    &:after {
        filter: blur(50px);
    }
    &:before {
        content: "";
        transform: scale(0);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -2px; /* !importanté */
        border-radius: inherit; /* !importanté */
        background: linear-gradient(
            to right,
            rgb(0, 220, 130),
            rgb(54, 228, 218),
            rgb(22, 167, 158)
        );
        transition: 0.3s;
    }
    &:after {
        content: "";
        transform: scale(1);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9999;
        margin: -2px; /* !importanté */
        border-radius: inherit; /* !importanté */
        background-color: rgba(255, 255, 255, 0);
        transition: 0.3s;
    }
    transition: 0.3s all ease-out;

    &:hover {
        z-index: 999999;
        transform: scale(1.03);
        // border: none !important;
        &:before {
            margin: -2px; /* !importanté */
            filter: blur(5px);
            transform: scale(1.03);

            // transform: scale(1.03);
        }
    }
}
</style>
