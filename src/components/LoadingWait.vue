<script>
    import { store } from "../store.js";
    export default {
        name: "LoadingWait",
        data() {
            return {
                store
            }
        }
    }
</script>

<template>

    <div class="WaitingRoom d-flex justify-content-center align-items-center" v-if="store.loading">
        <h2>I'm Stalling...3...2....1....-1</h2>
    </div>
 
</template>

<style scoped lang="scss">
    .WaitingRoom {
        background-color: cadetblue;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

    }
</style>