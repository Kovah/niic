<script setup>
import Stats from './Stats.vue';</script>

<template>
    <div class="min-w-[22ch]">
        <div class="mb-4 border border-gray-900 w-20 h-20 cursor-pointer rounded"
            v-on:click="openItemSelector">
            <div class="relative border border-gray-700 w-full h-full rounded flex items-center justify-center">
                <img :src="imagePath" :alt="item.name" v-if="itemLoaded" v-bind:title="title">
                <span class="p-1 text-xs text-gray-500" v-if="!itemLoaded">Select an Item or Set</span>
                <span class="absolute -top-1 -right-1 badge" v-if="isSet">Set</span>
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
        isSet () {
            return this.itemLoaded ? this.item.id.startsWith('set') : false;
        },
        imagePath () {
            if (this.itemLoaded) {
                return this.isSet ? '/items/' + this.item.items[0] + '.png' : '/items/' + this.item.id + '.png';
            }
            return '';
        },
        title () {
            return this.itemLoaded ? this.item.name : '';
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
