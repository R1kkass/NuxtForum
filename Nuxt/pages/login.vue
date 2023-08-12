<template>
    <div class="Login">
        <div class="Login__content">
            <h1>Авторизация</h1>
            <Input placeholders="Имя" />
            <Input placeholders="Пароль" />
            <Button>Вход</Button>
        </div>
    </div>
</template>

<script setup>
import Input from "../shared/Input/Input.vue";
import Button from "../shared/Button/Button.vue";
</script>

<style lang="scss">
.Login {
    display: flex;
    flex-direction: column;
    align-items: center;
    //width: 50vw;
    width: 90%;
    margin: auto;
    max-width: 500px;

    position: relative;
    height: 600px;
    justify-content: center;
    box-sizing: border-box;

    $border: 5px;
    color: #fff;
    background: rgba(255, 255, 255, 0.9);
    background-clip: padding-box; /* !importanté */
    border: solid $border transparent; /* !importanté */
    border-radius: 1em;
    h1 {
        background: linear-gradient(
            to right,
            rgb(0, 220, 130),
            rgb(54, 228, 218),
            rgb(22, 167, 158)
        );
        font-weight: 900;
        font-size: 40px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -$border; /* !importanté */
        border-radius: inherit; /* !importanté */
        background: linear-gradient(
            to right,
            rgb(0, 220, 130),
            rgb(54, 228, 218),
            rgb(22, 167, 158)
        );
        filter: blur(10px);
    }
    &__content {
        gap: 10px;
        margin: 0 auto;
        flex-direction: column;
        border-radius: 9px;
        width: calc(100% - 20px);
        justify-content: center;
        align-items: center;
        display: flex;
        button{
            margin-top: 40px;
        }
    }
}
</style>
