<script>
    import axios from "axios";
    import { store } from "../store.js";

    import CardLayout from "./CardLayout.vue";

    export default {
        name: "CardSection",
            data() {
                return {
                    store,
                    

                }
            },
        components: {
            CardLayout
        },
        methods: {
            getArchetype() {
                axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php")
                .then(response => {
                    console.log(response.data.length);
                    for(let i = 0; response.data.length > i; i++) {
                        this.store.archetypeList.push(response.data[i].archetype_name);
                        
                    }
                    
            
                });
            }
            /* 
            listaFiltro() {
                console.log(this.store.cardList.length );
            for(let i = 0; this.store.cardList.length > i; i++) {
                if(!this.archetypeList.includes(this.store.cardList[i].archetype)) {
                    this.archetypeList.push(this.store.cardList[i].archetype);
                    console.log(this.store.cardList[i].archetype.length);
                }
            }
           
             
            }
            
            */
        },
        created() {
            this.getArchetype();
        }
    }
</script>
<!--$emit('doSearch', 'archetype.archetype)-->

<template>
    <div class="mainAll container-fluid">
        <div class="container p-4">
            <select v-model="store.search" @change="$emit('doSearch', value)" class="px-5 py-2 rounded m-4" name="categories" id="race">
                <option v-for="(archetype, index) in store.archetypeList" :key="index" :value="archetype">{{archetype}}</option>
            </select>

            <div class="container bg-white p-3">
                <div class="container-fluid cardNumber p-3">
                    <span class="text-white">Found {{ store.cardList.length }} cards</span>
                </div>

                <div class="container ">
                    <div class="row d-flex justify-content-between py-2">
                        <div class="cards m-2 p-0 text-center col-2 " v-for="(card, index) in store.cardList" :key="index">
                            <CardLayout
                                :image="card.card_images[0].image_url"
                                :name="card.name"
                                :race="card.race"
                                />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        


    </div>
</template>

<style scoped lang="scss">
    .mainAll, .cards {
        background-color: rgb(224, 140, 51);
    }

    .cardNumber {
        background-color: rgb(38, 42, 45);
    }
</style>