<template>
    <div v-if="store.itemSelector.isOpen" class="absolute z-30 left-0 top-0 right-0 bottom-0">
        <div class="container max-h-full mx-auto py-5 overflow-y-auto">
            <div class="relative z-40 bg-gray-900 rounded-xl border border-gray-900 w-full max-w-xl mx-auto shadow-xl">
                <div class="rounded-xl border border-gray-700 p-4">

                    <h2 class="h2 mb-4">Item Select</h2>

                    <div class="text-xs text-gray-400 mb-1">Filter Items</div>
                    <div class="flex mb-4">
                        <div>
                            <button class="btn" v-on:click="toggleFilter('head', $event)">Head</button>
                            <button class="btn" v-on:click="toggleFilter('chest', $event)">Chest</button>
                            <button class="btn" v-on:click="toggleFilter('legs', $event)">Legs</button>
                            <button class="btn" v-on:click="toggleFilter('boots', $event)">Boots</button>
                            <button class="btn" v-on:click="toggleFilter('weapon', $event)">Weapon</button>
                            <button class="btn" v-on:click="toggleFilter('accessory', $event)">Accessory</button>
                        </div>
                        <div>
                            <select class="select" name="set" id="set" v-on:change="filterBySet">
                                <option value="">Select Set</option>
                                <option value="2D">2D</option>
                                <option value="BadlyDrawn">Badly Drawn</option>
                                <option value="Beardverse">Beardverse</option>
                                <option value="Cave">Cave</option>
                                <option value="Clock">Clock</option>
                                <option value="Forest">Forest</option>
                                <option value="Gaudy">Gaudy</option>
                                <option value="GRB">GRB</option>
                                <option value="HSB">HSB</option>
                                <option value="Jake">Jake</option>
                                <option value="rerednaW">rerednaW</option>
                                <option value="Sewers">Sewers</option>
                                <option value="Spoopy">Spoopy</option>
                                <option value="Stealth">Stealth</option>
                                <option value="Training">Training</option>
                                <option value="UUGRings">UUGs Rings</option>
                                <option value="Wanderer">Wanderer</option>
                            </select>
                        </div>
                    </div>


                    <div class="flex flex-wrap">
                        <div class="w-12 h-12 border-2 border-gray-700 text-xs break-words overflow-hidden cursor-pointer"
                            v-for="item in itemList" v-on:click="applyItem(item)">
                            <img :src="'/items/' + item.id + '.png'" :alt="item.name" loading="lazy">
                        </div>
                    </div>

                    <button class="btn mt-4" v-on:click="closeSelector">Cancel</button>

                </div>
            </div>
        </div>
        <div class="absolute z-30 left-0 top-0 right-0 bottom-0 bg-gray-900/70" v-on:click="closeSelector"></div>
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
            typeFilters: [],
            setFilter: null
        };
    },
    computed: {
        itemList () {
            let items = itemData;
            if (this.typeFilters.length > 0) {
                items = items.filter((item) => this.typeFilters.includes(item.type));
            }
            if (this.setFilter !== null) {
                items = items.filter((item) => item.set === this.setFilter);
            }
            return items;
        }
    },
    methods: {
        toggleFilter (newFilter, event) {
            if (!this.typeFilters.includes(newFilter)) {
                this.typeFilters.push(newFilter);
            } else {
                this.typeFilters = this.typeFilters.filter((existingFilter) => existingFilter !== newFilter);
            }
            event.target.classList.toggle('btn-active');
        },
        filterBySet (event) {
            const newSet = event.target.options[event.target.selectedIndex].value;
            this.setFilter = newSet !== '' ? newSet : null;
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
