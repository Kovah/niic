<script setup>
import Item from './Item.vue';</script>

<template>
    <main class="border-2 border-gray-900 shadow-xl my-8 p-4">
        <h1 class="text-2xl font-bold tracking-tight">NIIC - NGU Idle Item Comparator</h1>
        <div class="mt-4 grid grid-cols-2 gap-8">
            <Item :item="store.items.left"/>
            <Item :item="store.items.right"/>
        </div>
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
