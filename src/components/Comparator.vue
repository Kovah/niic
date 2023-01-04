<script setup>
import Item from './Item.vue';
import ItemSelector from './ItemSelector.vue';</script>

<template>
    <main class="border-4 border-gray-900 shadow-xl my-8 p-4">
        <h1 class="text-2xl font-bold tracking-tight">NIIC - NGU Idle Item Comparator</h1>
        <div class="mt-4 grid grid-cols-2 gap-8">
            <Item :item="item" :id="index" v-for="(item, index) in store.items"/>
        </div>
        <ItemSelector/>
    </main>
</template>

<script>
import { store } from './../store.js';

export default {
    name: 'Comparator',
    data () {
        return {
            store
        };
    }
};
</script>
