<script setup>
import {Head, Link} from "@inertiajs/vue3";
import {ref} from 'vue'

import WordPressLogo from "../Components/Logo/WordPressLogo.vue";
import LaravelLogo from "../Components/Logo/LaravelLogo.vue";
import VueLogo from "../Components/Logo/VueJsLogo.vue"
import IskamedLogo from "@/Components/CompaniesLogo/IskamedLogo.vue";
import CrossLogo from "@/Components/Logo/CrossLogo.vue";

import LinkIcon from "@/Components/Icons/LinkIcon.vue"
import GeoIcon from "@/Components/Icons/GeoIcon.vue"
import LinkedIn from "@/Components/Icons/LinkedInIcon.vue"
import GitHub from "@/Components/Icons/GitHubIcon.vue"
import Mail from "@/Components/Icons/MailIcon.vue"

const home = ref(null);
const technologies = ref(null);
const work = ref(null);
const experience = ref(null);

const showMobileMenu = ref(false)

const toggleMenu = () => {
    showMobileMenu.value = !showMobileMenu.value;
};

const x = ref(0);
const y = ref(0);

// Function to update mouse position
const updateMousePosition = (event) => {
    x.value = event.clientX;
    y.value = event.clientY;
};


window.addEventListener('mousemove', updateMousePosition);

defineProps({
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

function scrollTo(section) {

    showMobileMenu.value = false;
    
    section?.scrollIntoView({ behavior: 'smooth' }) 
}

</script>

<template>
<Head title="PHP Developer, Fullstack Developer" />
<div class="bg-stone-900">
    <header class="fixed top-0 w-full h-14">
        <nav class="">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    class="flex items-center px-8 font-bold text-white"
                    :href="route('main')"
                >
                    Pandda
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    @click="toggleMenu"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div
                    id="navbar-default"
                    class="hidden w-full md:block md:w-auto lt:bg-stone-900 lt:-left-full lt:opacity-0 lt:fixed lt:flex lt:h-svh lt:top-0 transition-all duration-500 ease-in-out lt:mobile-menu"
                    :class="{'mobile_menu': showMobileMenu}"
                >
                    <ul class="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent lt:bg-slate-50">
                        <li id="close_mobile_menu" class="hidden justify-end">
                            <CrossLogo :x="24" :y="24" @click="toggleMenu" />
                        </li>
                        <li>
                            <button class="px-8 text-white lt:text-stone-900 lt:py-2" @click="scrollTo(home)">Home</button>
                        </li>  
                        <li>
                            <button class="px-8 text-white lt:text-stone-900 lt:py-2" @click="scrollTo(technologies)">Technologies</button>
                        </li>
                        <li>
                            <button class="px-8 text-white lt:text-stone-900 lt:py-2" @click="scrollTo(work)">Work</button>
                        </li>
                        <li>
                            <button class="px-8 text-white lt:text-stone-900 lt:py-2" @click="scrollTo(experience)">Experience</button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <section class="h-svh flex flex-col justify-center items-center text-white" ref="home">
        <h1 class="text-12xl font-semibold text-center sm:text-9xl lt:text-8xl">Pandda</h1>
        <div class="uppercase text-2xl font-semibold mt-3 p-6">PHP Developer, Fullstack Developer</div>
    </section>
    <section class="min-h-svh flex flex-col justify-center items-center text-white" ref="technologies">
        <div class="text-7xl text-center font-semibold mb-8 p-6 sm:text-6xl lt:text-5xl">Technologies</div>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 lt:grid-cols-1 gap-10 p-6 lt:justify-center">
            <div class="flex flex-col w-72 py-8 items-center rounded-xl border border-gray-600">
                <WordPressLogo :x="52" :y="52" />
                <div class="text-2xl mt-6">WordPress</div>
            </div>
            <div class="flex flex-col w-72 py-8 items-center rounded-xl border border-gray-600">
                <LaravelLogo :x="52" :y="52" />
                <div class="text-2xl mt-6">Laravel</div>
            </div>
            <div class="flex flex-col w-72 py-8 items-center rounded-xl border border-gray-600">
                <VueLogo :x="52" :y="52" />
                <div class="text-2xl mt-6">Vue.js</div>
            </div>
        </div>
    </section>
    <section class="min-h-svh flex flex-col justify-center items-center text-white" ref="work">
        <div class="text-7xl text-center font-semibold mb-8 p-6 sm:text-6xl lt:text-5xl">My Work</div>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 lt:grid-cols-1 gap-10 p-6">
            <div class="flex flex-col w-72 pb-8 items-center rounded-xl bg-zinc-800">
                <img class="rounded-t-xl" src="/images/projects/iskamed.by.png" alt="iskamed.by" />
                <div class="text-2xl mt-6">ISKAMED (B2C)</div>
            </div>
        </div>
    </section>
    <section class="min-h-svh max-w-7xl mx-auto flex flex-col justify-center items-center text-white" ref="experience">
        <div class="text-7xl text-center font-semibold mb-8 p-6 sm:text-6xl lt:text-5xl">Professional Experience</div>
        <div class="flex flex-col w-full items-center gap-10">
            <div class="flex flex-col w-3/4 py-8 px-16 items-center rounded-xl border border-gray-600">
                <div class="flex justify-between w-full text-2xl sm:text-xl lt:flex-col lt:text-sm"><span>FullStack Developer @ ISKAMED LLC</span><span>2020 - Present</span></div>
                <div class="flex w-full justify-between mt-6 lg:flex-row sm:flex-col-reverse lt:flex-col-reverse">
                    <div class="flex flex-col lg:w-3/4 lt:w-full">
                        <div class="flex gap-5 w-full text-base text-gray-400 lt:flex-col lt:gap-2 lt:my-4">
                            <div class="flex items-baseline"><GeoIcon :x="16" :y="16" /><div class="ml-2">Minsk, Belarus</div></div>
                            <div class="flex items-baseline"><LinkIcon :x="16" :y="16" /><a class="ml-2" href="https://ltd.iskamed.by/" target="_blank" rel="noopener noreferrer">ltd.iskamed.by</a></div>
                        </div>
                        <div class="w-full text-base">Building and optimizing two WordPress e-commerce websites, incorporating jQuery AJAX for dynamic content loading, developing custom plugins, and utilizing REST API for seamless data interaction.</div>
                        <div class="flex gap-10 w-full mt-6 lg:flex-row sm:flex-col lt:flex-col lt:gap-5">
                            <div class="w-fit bg-white text-black px-4 py-1 rounded-full">WordPress</div>
                            <div class="w-fit bg-white text-black px-4 py-1 rounded-full">jQuery</div>
                            <div class="w-fit bg-white text-black px-4 py-1 rounded-full">AJAX</div>
                            <div class="w-fit bg-white text-black px-4 py-1 rounded-full">Swiper</div>
                            <div class="w-fit bg-white text-black px-4 py-1 rounded-full">REST API</div>
                        </div>
                    </div>
                    <div class="flex justify-center items-center">
                        <IskamedLogo :x="90" :y="90" />
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <footer class="flex flex-col items-center text-white pb-8">
        <div class="text-2xl mb-6">Contacts</div>
        <div class="flex gap-5 mb-5">
            <div class="flex">
                <a href="https://www.linkedin.com/in/vladimir-lobko/" target="_blank" rel="noopener noreferrer">
                    <LinkedIn :x="50" :y="50" />
                </a>
                <!-- <a class="ml-2" href="https://www.linkedin.com/in/vladimir-lobko/" target="_blank">LinkedIn</a> -->
            </div>
            <div class="flex">
                <a href="https://github.com/Pandda12" target="_blank" rel="noopener noreferrer">
                    <GitHub :x="50" :y="50" />
                </a>
                <!-- <a class="ml-2" href="https://github.com/Pandda12" target="_blank">GitHub</a> -->
            </div>
            
        </div>

    </footer>
    <!-- <div id="cursor" :style="{ left: `${x}px`, top: `${y}px` }"></div> -->
    <div id="cursor" :style="{ transform: `translate(${x}px, ${y}px)` }"></div>
    <div id="cursor-center" :style="{ left: `${x}px`, top: `${y}px` }"></div>
</div>
</template>

<style>
header nav{
    backdrop-filter: saturate(180%) blur(20px);
}
.mobile_menu{
    left: 0;
    opacity: 1;
}
.mobile_menu>ul{
    width: 75%;
}
.mobile_menu #close_mobile_menu{
    display: flex;
}
#cursor {
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    margin-left: -15px;
    margin-top: -15px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 1px solid #66d9ed;
    border-radius: 50%;
    transition: all .08s ease-out;
}
#cursor-center{
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    margin-left: -3px;
    margin-top: -3px;
    width: 6px;
    height: 6px;
    background-color: #66d9ed;
    border-radius: 50%;
}

</style>