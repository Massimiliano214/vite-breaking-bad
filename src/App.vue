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
                let apiLink = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num20&offset=0";
                if(store.cardList.archetype != "All Archetypes") {
                    axios.get(apiLink)
                    .then(response => {
                        this.store.cardList = response.data.data;
                        this.store.loading = false;
                    });
                } else {
                    apiLink += `?archetype=${store.cardList.archetype}`;
                    axios.get(apiLink)
                    .then(response => {
                        this.store.cardList = response.data.data;
                        this.store.loading = false;
                    });
                }
                
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
    <CardSection @doSearch="getCards" />
</template>


<style lang="scss">
    @use "./styles/general.scss";
</style>