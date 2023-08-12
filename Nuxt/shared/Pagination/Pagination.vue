<template>
    <div class="Pagination">
        <div @click="moveToIndex(2)" class="Pagination__unit">
            <p>1</p>
        </div>
        <div @click="moveToIndex(3)" class="Pagination__unit">
            <p>1</p>
        </div>
        <div class="Pagination__unit">
            <p>1</p>
        </div>
        <div class="Pagination__unit">
            <p>1</p>
        </div>
        <button @click="moveToIndex">move to about page</button>
    </div>
</template>

<script setup>
const router = useRouter();
const moveToIndex = (id) => router.push({ query: {
    page: id
} });
</script>

<style lang="scss">
.Pagination {
    display: flex;
    margin-top: 20px;
    margin-bottom: 200px;
    width: 100%;
    gap: 10px;
    justify-content: center;
    height: 40px;
    &__unit {
        width: 40px;
        background-color: rgb(60, 60, 60);
        color: white;
        position: relative;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            margin: -1px; /* !importanté */
            border-radius: inherit; /* !importanté */
            background: linear-gradient(
                to right,
                rgb(0, 220, 130),
                rgb(54, 228, 218),
                rgb(22, 167, 158)
            );
            transition: 0.3s;
        }
        &:hover {
            &:before {
                margin: -5px;
                filter: blur(5px);
            }
        }
    }
}
</style>
