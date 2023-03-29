<script>
    export default {
        name: "CardLayout",
        props: {
            image: String,
            name: String,
            race: String,
        }
    }
</script>

<template>

    <div class="cardSingular">
        <img class="img-fluid" :src="image" alt="Card Image">
        <h4 class="text-white p-2">{{ name }}</h4>
        <h5>{{ race }}</h5>
    </div>
</template>

<style scoped lang="scss">

</style>