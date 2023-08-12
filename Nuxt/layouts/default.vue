<template>
    <div class="content">
        <header>
            <p>Forum</p>
        </header>
        <slot />
    </div>
    <footer></footer>
</template>

<style lang="scss">
footer {
    width: 100%;
    height: 400px;
}

.content {
    height: calc(100vh - 400px);
}

header {
    height: 60px;
    position: relative;
    margin-bottom: 20px;
    background-color: rgb(60, 60, 60);
    color: white;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin-bottom: -5px; /* !importanté */
        border-radius: inherit; /* !importanté */
        background: linear-gradient(
            to right,
            rgb(0, 220, 130),
            rgb(54, 228, 218),
            rgb(22, 167, 158)
        );
        filter: blur(5px);
        color: white;
    }
}
</style>
