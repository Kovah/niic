import { reactive } from 'vue';

export const store = reactive({
    items: [
        {id: null, name: null, bonus: {}},
        {id: null, name: null, bonus: {}}
    ],
    setItem (item) {
        this.items[this.itemSelector.target] = item;
    },
    itemSelector: {
        target: null,
        isOpen: false
    },
    setItemSelectorTarget (target) {
        this.itemSelector.target = target;
    },
    openItemSelector () {
        this.itemSelector.isOpen = true;
        document.body.classList.add('overflow-hidden');
    },
    closeItemSelector () {
        this.itemSelector.isOpen = false;
        document.body.classList.remove('overflow-hidden');
    }
});
