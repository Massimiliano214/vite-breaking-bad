import { reactive } from "vue";

export const store = reactive(
    {
        cardList: [],
        loading: true,
        search: 'All Archetypes',
        archetypeList: ["All Archetypes"]
    }
);