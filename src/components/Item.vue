<script setup>
import Stats from './Stats.vue';</script>

<template>
    <div>
        <div class="mb-4 border-2 border-gray-700 w-20 h-20 flex items-center justify-center cursor-pointer"
            v-on:click="openItemSelector">
            <img :src="itemImagePath" :alt="item.name" v-if="this.itemLoaded">
            <span class="p-1 text-xs" v-if="!this.itemLoaded">Select an Item</span>
        </div>
        <Stats :item="item"/>
    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    name: 'Item',
    props: ['id', 'item'],
    computed: {
        itemLoaded () {
            return this.item.id !== null;
        },
        itemImagePath () {
            return this.itemLoaded ? '/items/' + this.item.id + '.png' : '';
        }
    },
    methods: {
        openItemSelector () {
            store.setItemSelectorTarget(this.id);
            store.openItemSelector();
        }
    }
};
</script>
