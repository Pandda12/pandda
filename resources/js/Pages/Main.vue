<script setup>
import {Head, Link} from "@inertiajs/vue3";
import {ref} from 'vue'

import WordPressLogo from "../Components/Logo/WordPressLogo.vue";
import LaravelLogo from "../Components/Logo/LaravelLogo.vue";
import VueLogo from "../Components/Logo/VueJsLogo.vue"
import IskamedLogo from "@/Components/CompaniesLogo/IskamedLogo.vue";
import CrossLogo from "@/Components/Logo/CrossLogo.vue";

const home = ref(null);
const technologies = ref(null);
const work = ref(null);
const experience = ref(null);

const showMobileMenu = ref(false)

const toggleMenu = () => {
    showMobileMenu.value = !showMobileMenu.value;
};

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
                <div class="hidden w-full md:block md:w-auto lt:bg-stone-900" id="navbar-default" :class="{'mobile_menu': showMobileMenu}">
                    <ul class="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent lt:bg-slate-50">
                        <li id="close_mobile_menu" class="hidden">
                            <button class="px-8 text-white lt:text-stone-900" @click="toggleMenu">Close</button>
                            <CrossLogo :x="24" :y="24" @click="toggleMenu" />
                        </li>
                        <li>
                            <button class="px-8 text-white lt:text-stone-900" @click="scrollTo(home)">Home</button>
                        </li>  
                        <li>
                            <button class="px-8 text-white lt:text-stone-900" @click="scrollTo(technologies)">Technologies</button>
                        </li>
                        <li>
                            <button class="px-8 text-white lt:text-stone-900" @click="scrollTo(work)">Work</button>
                        </li>
                        <li>
                            <button class="px-8 text-white lt:text-stone-900" @click="scrollTo(experience)">Experience</button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <section class="h-svh flex flex-col justify-center items-center text-white" ref="home">
        <h1 class="text-12xl font-semibold text-center">Pandda</h1>
        <div class="uppercase text-2xl font-semibold mt-3">PHP Developer, Fullstack Developer</div>
    </section>
    <section class="h-svh flex flex-col justify-center items-center text-white" ref="technologies">
        <div class="text-7xl text-center font-semibold mb-8">Technologies</div>
        <div class="flex flex-wrap gap-10">
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
    <section class="h-svh flex flex-col justify-center items-center text-white" ref="work">
        <div class="text-7xl text-center font-semibold mb-8">My Work</div>
        <div class="flex flex-wrap gap-10">
            <div class="flex flex-col w-72 py-8 items-center rounded-xl border border-gray-600">
                <WordPressLogo :x="52" :y="52" />
                <div class="text-2xl mt-6">WordPress</div>
            </div>
        </div>
    </section>
    <section class="h-svh max-w-7xl mx-auto flex flex-col justify-center items-center text-white" ref="experience">
        <div class="text-7xl text-center font-semibold mb-8">Professional Experience</div>
        <div class="flex flex-col w-full items-center gap-10">
            <div class="flex flex-col w-3/4 py-8 px-16 items-center rounded-xl border border-gray-600">
                <div class="flex justify-between w-full text-2xl"><span>FullStack Developer @ ISKAMED LLC</span><span>2019 - Present</span></div>
                <div class="flex w-full justify-between mt-6">
                    <div class="flex flex-col">
                        <div class="w-full text-base">Developing two WordPress and WooCommerse websites</div>
                        <div class="flex gap-10 w-full mt-6">
                            <div class="bg-white text-black px-4 py-1 rounded-full">PHP</div>
                            <div class="bg-white text-black px-4 py-1 rounded-full">WordPress</div>
                            <div class="bg-white text-black px-4 py-1 rounded-full">JS</div>
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
        <a href="https://www.linkedin.com/in/vladimir-lobko/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Pandda12" target="_blank">GitHub</a>
        Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
    </footer>
</div>
</template>

<style>
header nav{
    backdrop-filter: saturate(180%) blur(20px);
}
.mobile_menu{
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    height: 100svh;
}
.mobile_menu #close_mobile_menu{
    display: block;
}
</style>
