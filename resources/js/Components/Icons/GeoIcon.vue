<script setup>
defineProps({
    x: {
        type: Number,
        default: 512
    },
    y: {
        type: Number,
        default: 512
    },
    fill: {
        type: String,
        default: '#ffffff'
    }
})
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" :width="x" :height="y" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
        <g>
            <path d="M32 0A24.032 24.032 0 0 0 8 24c0 17.23 22.36 38.81 23.31 39.72a.99.99 0 0 0 1.38 0C33.64 62.81 56 41.23 56 24A24.032 24.032 0 0 0 32 0zm0 35a11 11 0 1 1 11-11 11.007 11.007 0 0 1-11 11z" :fill="fill" opacity="1"></path>
        </g>
    </svg>
</template>