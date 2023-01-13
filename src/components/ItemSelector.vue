<template>
    <div v-if="store.itemSelector.isOpen" class="modal-wrapper">
        <div class="modal-container">
            <div class="modal">
                <div class="modal-inner">

                    <div class="mb-4 flex items-center justify-between">
                        <h2 class="h2">Item Select</h2>
                        <button class="btn" v-on:click="closeSelector">Close</button>
                    </div>

                    <div class="sm:flex items-end mb-4">
                        <div>
                            <div class="text-xxs sm:text-xs ml-1 mb-1 text-gray-400">Filter Items</div>
                            <button class="btn" v-on:click="toggleFilter('head', $event)">Head</button>
                            <button class="btn" v-on:click="toggleFilter('chest', $event)">Chest</button>
                            <button class="btn" v-on:click="toggleFilter('legs', $event)">Legs</button>
                            <button class="btn" v-on:click="toggleFilter('boots', $event)">Boots</button>
                            <button class="btn" v-on:click="toggleFilter('weapon', $event)">Weapon</button>
                            <button class="btn" v-on:click="toggleFilter('accessory', $event)">Accessory</button>
                        </div>
                        <div class="mt-2 sm:mt-0 sm:ml-auto sm:text-right">
                            <input type="text" name="search" class="input mb-1" placeholder="Search items..."
                                v-on:input="filterByName">
                            <select class="select" name="set" id="set" v-on:change="filterBySet">
                                <option value="">Select Set</option>
                                <option value="2D">2D</option>
                                <option value="BadlyDrawn">Badly Drawn</option>
                                <option value="Beardverse">Beardverse</option>
                                <option value="Cave">Cave</option>
                                <option value="Choco">Choco</option>
                                <option value="Clock">Clock</option>
                                <option value="Edgy">Edgy</option>
                                <option value="Exile">Exile</option>
                                <option value="Fad">Fad</option>
                                <option value="Forest">Forest</option>
                                <option value="Gaudy">Gaudy</option>
                                <option value="GRB">GRB</option>
                                <option value="GreasyNerd">Greasy Nerd</option>
                                <option value="Hearts">Hearts</option>
                                <option value="HSB">HSB</option>
                                <option value="Jake">Jake</option>
                                <option value="JRPG">JRPG</option>
                                <option value="Meta">Meta</option>
                                <option value="Mobster">Mobster</option>
                                <option value="Party">Party</option>
                                <option value="PrettyPinkPrincess">Pretty Pink Princess</option>
                                <option value="rerednaW">rerednaW</option>
                                <option value="Sewers">Sewers</option>
                                <option value="Spoopy">Spoopy</option>
                                <option value="Stealth">Stealth</option>
                                <option value="Training">Training</option>
                                <option value="Typo">Typo</option>
                                <option value="UUGRings">UUGs Rings</option>
                                <option value="Wanderer">Wanderer</option>
                            </select>
                        </div>
                    </div>

                    <div class="item-grid">
                        <div class="single-item" v-for="item in itemList" v-on:click="applyItem(item)">
                            <img :src="'/items/' + item.id + '.png'" :alt="item.name" loading="lazy">
                        </div>
                    </div>

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
            nameFilter: null,
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
            if (this.nameFilter !== null) {
                items = items.filter((item) => item.name.toLowerCase().includes(this.nameFilter));
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
        filterByName (event) {
            const newName = event.target.value;
            this.nameFilter = newName !== '' ? newName.toLowerCase() : null;
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
