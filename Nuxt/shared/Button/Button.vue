<template>
    <button>
        <div>
            <h2><slot /></h2>
        </div>
    </button>
</template>

<script setup></script>

<style lang="scss" scoped>
button {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 90%;
    margin: auto;
    height: 50px;
    h2 {
        background: linear-gradient(
            to right,
            rgb(0, 220, 130),
            rgb(54, 228, 218),
            rgb(22, 167, 158)
        );
        font-weight: 100;
        font-size: 30px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    cursor: pointer;
    position: relative;
    justify-content: center;
    box-sizing: border-box;

    background-clip: padding-box; /* !importanté */
    border: none;
    z-index: 5000;
    border-radius: 5px;
    z-index: 999;
    transition: 0.3s;
    div {
        background: rgba(255, 255, 255, 1);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: inherit;
    }
    &:hover {

        background: linear-gradient(
            to right,
            rgb(0, 220, 130),
            rgb(54, 228, 218),
            rgb(22, 167, 158)
        );
        h2 {
            background: linear-gradient(
                to right,
                rgb(255, 255, 255),
                rgb(255, 255, 255),
                rgb(255, 255, 255)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        div{
            background: none
        }
    }
    &:active{
        &:before{
            filter:blur(20px)
        }
    }
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
        filter: blur(5px);
    }
}
</style>
