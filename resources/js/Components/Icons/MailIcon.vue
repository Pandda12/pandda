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
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" :width="x" :height="y" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
        <g>
            <path d="m285.208 278.031 86.174 67.138H140.618l86.174-67.138 21.25 18.827c2.271 2.012 5.115 3.018 7.958 3.018s5.687-1.006 7.958-3.018zM118 181.642v150.725l90.52-70.525zm117.076 71.663L256 271.844l118.525-105.013h-237.05L235.07 253.3l.006.005zM512 78.393v355.215C512 476.833 476.833 512 433.607 512H78.393C35.167 512 0 476.833 0 433.607V78.393C0 35.167 35.167 0 78.393 0h355.215C476.833 0 512 35.167 512 78.393zm-94 97.45c0-18.203-14.36-33.012-32.011-33.012H126.011C108.36 142.831 94 157.64 94 175.843v160.313c0 18.203 14.36 33.012 32.011 33.012h259.978c17.651 0 32.011-14.809 32.011-33.012zm-24 156.523V181.642l-90.52 80.2z" :fill="fill" opacity="1" data-original="#000000"></path>
        </g>
    </svg>
</template>