<script>

    import axios from "axios";
    import { store } from "./store.js";
    import TheHeader from "./components/TheHeader.vue";
    import CardSection from "./components/CardSection.vue";
    import LoadingWait from "./components/LoadingWait.vue";

    export default {
        components: {
            TheHeader,
            CardSection,
            LoadingWait
        },
        data() {
            return {
                store
            }
        },
        methods: {
            getCards() {
                axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&attribute=dark")
                .then(response => {
                    this.store.cardList = response.data.data;
                    this.store.loading = false;
                });
            }
        },
        created() {
            this.getCards();
        }
    }
    
</script>


<template>
    <LoadingWait />
    <TheHeader></TheHeader>
    <CardSection />
</template>


<style lang="scss">
    @use "./styles/general.scss";
</style>