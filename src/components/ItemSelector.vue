<template>
    <div v-show="store.itemSelector.isOpen" class="absolute z-30 left-0 top-0 right-0 bottom-0 bg-gray-900/20">
        <div class="container mx-auto h-screen flex flex-row justify-center items-center">
            <div class="bg-ngu-primary w-full max-w-xl p-4 shadow-xl">
                <h2 class="h2 mb-4">Item Select</h2>
                <div class="flex flex-wrap">
                    <div class="w-10 h-10 border-2 border-gray-700 text-xs break-words cursor-pointer"
                        v-for="item in itemData" v-on:click="applyItem(item)">
                        <img :src="'/items/' + item.id + '.png'" :alt="item.name">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import itemData from './../item-data.json';

export default {
    name: 'ItemSelector',
    data () {
        return {
            store,
            itemData
        };
    },
    methods: {
        applyItem (item) {
            store.setItem(item);
            store.closeItemSelector();
        }
    }
};
</script>
