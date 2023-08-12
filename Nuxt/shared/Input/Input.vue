<template>
    <div class="Input">
        <p>
            {{ placeholders }}
        </p>
        <input @input="emit('change')" />
    </div>
</template>

<script setup>
defineProps({
    placeholders: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(["change"]);
</script>

<style lang="scss">
.Input {
    width: 100%;
    background-color: transparent;
    height: 50px;
    position: relative;
    border-radius: 4px;
    z-index: 215;

    &:before {
        content: "";
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
        z-index: 212;
        position: absolute;
    }
    input {
        z-index: 218;
        position: relative;
        width: 100%;
        padding-inline: 10px;
        padding-top: 10px;
        font-size: 18px;
        border: none;
        outline: none;
        height: 100%;
        &:focus {
            box-shadow: 0 0 2px 3px rgba(128, 128, 128, 0.3);
        }
    }
    p {
        color: rgba(128, 128, 128, 0.7);
        padding-top: 8px;
        z-index: 999;
        top: -5px;
        left: 10px;
        position: absolute;
    }
}
</style>
