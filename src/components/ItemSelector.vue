<template>
    <div v-show="store.itemSelector.isOpen" class="absolute z-30 left-0 top-0 right-0 bottom-0 bg-gray-900/70">
        <div class="container mx-auto h-screen flex flex-row justify-center items-center">
            <div class="bg-gray-900 rounded-xl border border-gray-900 w-full max-w-xl shadow-xl">
                <div class="rounded-xl border border-gray-700 p-4">

                    <h2 class="h2 mb-4">Item Select</h2>

                    <div class="text-xs">Filter Items</div>
                    <div class="mb-4 space-x-1">
                        <button class="btn" v-on:click="toggleFilter('head', $event)">Head</button>
                        <button class="btn" v-on:click="toggleFilter('chest', $event)">Chest</button>
                        <button class="btn" v-on:click="toggleFilter('legs', $event)">Legs</button>
                        <button class="btn" v-on:click="toggleFilter('boots', $event)">Boots</button>
                        <button class="btn" v-on:click="toggleFilter('weapon', $event)">Weapon</button>
                        <button class="btn" v-on:click="toggleFilter('accessory', $event)">Accessory</button>
                    </div>

                    <div class="flex flex-wrap">
                        <div class="w-10 h-10 border-2 border-gray-700 text-xs break-words cursor-pointer"
                            v-for="item in itemList" v-on:click="applyItem(item)">
                            <img :src="'/items/' + item.id + '.png'" :alt="item.name">
                        </div>
                    </div>

                    <button class="btn mt-4" v-on:click="closeSelector">Cancel</button>

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
            appliedFilters: []
        };
    },
    computed: {
        itemList () {
            if (this.appliedFilters.length > 0) {
                return itemData.filter((item) => this.appliedFilters.includes(item.type));
            }
            return itemData;
        }
    },
    methods: {
        toggleFilter (newFilter, event) {
            if (!this.appliedFilters.includes(newFilter)) {
                this.appliedFilters.push(newFilter);
            } else {
                this.appliedFilters = this.appliedFilters.filter((existingFilter) => existingFilter !== newFilter);
            }
            event.target.classList.toggle('btn-active');
        },
        applyItem (item) {
            store.setItem(item);
            store.closeItemSelector();
        },
        closeSelector () {
            store.closeItemSelector();
        }
    }
};
</script>
