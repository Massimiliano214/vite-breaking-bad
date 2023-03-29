<script>

    import axios from "axios";
    import { store } from "./store.js";
    import TheHeader from "./components/TheHeader.vue";
    import CardSection from "./components/CardSection.vue";

    export default {
        components: {
            TheHeader,
            CardSection
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
                });
            }
        },
        created() {
            this.getCards();
        }
    }
    
</script>


<template>
<TheHeader></TheHeader>
<CardSection />
</template>


<style lang="scss">
    @use "./styles/general.scss";
</style>