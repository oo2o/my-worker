<template>
    <div id="main" class="app-main">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted () {
        },
        beforeDestroy () {
        },
        methods: {
        }
    };
</script>

<style>
    .app-main{
        width: 100%;
        height: 100%;
    }
    .slide-fade-enter-active {
        transition: all .2s ease;
    }
    .slide-fade-leave-active {
        transition: all .05s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(5px);
        opacity: 0;
    }
</style>
