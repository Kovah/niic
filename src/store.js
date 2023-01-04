import { reactive } from 'vue';

export const store = reactive({
    items: {
        left: {
            id: null
        },
        right: {
            id: null
        }
    }
});
