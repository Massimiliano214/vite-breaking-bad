<script>

    import { store } from "../store.js";

    import CardLayout from "./CardLayout.vue";

    export default {
        name: "CardSection",
            data() {
                return {
                    store
                }
            },
        components: {
            CardLayout
        }
    }
</script>


<template>
    <div class="mainAll container-fluid">
        <div class="container p-4">
            <select class="px-5 py-2 rounded m-4" name="categories" id="race">
                <option value="alien">Alien</option>
            </select>

            <div class="container bg-white p-3">
                <div class="container-fluid cardNumber p-3">
                    <span class="text-white">Found # card</span>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-3" v-for="(card, index) in store.cardList" :key="index">
                            <CardLayout
                                :image="card.card_images.image_url_cropped"
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
    .mainAll {
        background-color: rgb(224, 140, 51);
    }

    .cardNumber {
        background-color: rgb(38, 42, 45);
    }
</style>