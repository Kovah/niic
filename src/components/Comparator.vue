<script setup>
import Item from './Item.vue';
import ItemSelector from './ItemSelector.vue';
</script>

<template>
    <main class="app">
        <div class="app-inner">
            <h1 class="text-2xl font-bold tracking-tight">NIIC - NGU Idle Item Comparator</h1>
            <div class="w-auto mt-4 flex gap-4 md:gap-8 ">
                <Item :item="item" :id="index" v-for="(item, index) in store.items"/>
            </div>
        </div>
    </main>
    <ItemSelector/>
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
