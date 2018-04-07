<template>
    <div id="app">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="less">
    html, body, #app {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        background-color: black;

        .fade-enter-active, .fade-leave-active {
            transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }

        .fade-enter, .fade-leave-active {
            transform: scale(1.2);
            opacity: 0;
        }
    }
</style>
