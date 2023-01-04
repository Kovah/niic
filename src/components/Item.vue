<script setup>
import Stats from './Stats.vue';</script>

<template>
    <div>
        <div class="mb-4 border border-gray-900 w-20 h-20 cursor-pointer rounded"
            v-on:click="openItemSelector">
            <div class="border border-gray-700 w-full h-full rounded flex items-center justify-center">
                <img :src="itemImagePath" :alt="item.name" v-if="itemLoaded">
                <span class="p-1 text-xs text-gray-500" v-if="!itemLoaded">Select an Item</span>
            </div>
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
