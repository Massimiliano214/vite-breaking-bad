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

    <div>
        <img class="img-fluid" :src="image" alt="Card Image">
        <h4>{{ name }}</h4>
        <h5>{{ race }}</h5>
    </div>
</template>

<style scoped lang="scss">

</style>