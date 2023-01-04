<script setup>
import Stats from './Stats.vue';
</script>

<template>
    <div>
        <div class="mb-4 border-2 border-gray-700 w-20 h-20">
        </div>
        <Stats/>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: ['item'],
};
</script>
