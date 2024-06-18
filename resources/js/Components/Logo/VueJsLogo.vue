<script setup>
defineProps({
    x: {
        type: Number,
        default: 256
    },
    y: {
        type: Number,
        default: 256
    }
})
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" :width="x" :height="y" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
        <g>
            <path d="M23.936 2.255A.5.5 0 0 0 23.5 2H15a.498.498 0 0 0-.429.243L12 6.528 9.429 2.243A.498.498 0 0 0 9 2H.5a.5.5 0 0 0-.428.759l11.5 19a.5.5 0 0 0 .856 0l11.5-19a.498.498 0 0 0 .008-.504Z" fill="#ffffff" opacity="1" data-original="#000000" class=""></path>
            <path fill="" d="M11.571 7.757a.518.518 0 0 0 .858 0L15.283 3h2.806L12 12.568 5.911 3h2.806Z" opacity="1" data-original="#0288d1" class=""></path>
            <path fill="" d="M12 20.534 1.387 3h3.338l6.853 10.769a.5.5 0 0 0 .844 0L19.275 3h3.338Z" opacity="1" data-original="#00897b" class=""></path>
            <path fill="url(#a)" d="M23.936 2.255A.5.5 0 0 0 23.5 2H15a.498.498 0 0 0-.429.243L12 6.528 9.429 2.243A.498.498 0 0 0 9 2H.5a.5.5 0 0 0-.428.759l11.5 19a.5.5 0 0 0 .856 0l11.5-19a.498.498 0 0 0 .008-.504Z" opacity="1" data-original="url(#a)" class=""></path>
        </g>
    </svg>
</template>
