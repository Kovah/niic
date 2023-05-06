<template>
    <div v-if="store.itemSelector.isOpen" class="modal-wrapper">
        <div class="modal-container">
            <div class="modal">
                <div class="modal-inner">

                    <div class="mb-4 flex items-center justify-between">
                        <div class="text-gray-500">
                            <h2 class="inline h2 cursor-pointer hover:text-gray-300 mr-4"
                                v-bind:class="{'text-gray-100': activeList === 'items'}"
                                v-on:click="switchList('items')">Item Select</h2>
                            <h2 class="inline h2 cursor-pointer hover:text-gray-300"
                                v-bind:class="{'text-gray-100': activeList === 'sets'}"
                                v-on:click="switchList('sets')">Set Select</h2>
                        </div>
                        <button class="btn" v-on:click="closeSelector">Close</button>
                    </div>

                    <ItemList v-show="activeList === 'items'"/>
                    <SetList v-show="activeList === 'sets'"/>

                </div>
            </div>
        </div>
        <div class="absolute z-30 left-0 top-0 right-0 bottom-0 bg-gray-900/70" v-on:click="closeSelector"></div>
    </div>
</template>

<script>
import { store } from '../store.js';
import ItemList from './ItemList.vue';
import SetList from './SetList.vue';

export default {
    name: 'ItemSelector',
    components: {SetList, ItemList},
    data () {
        return {
            store,
            activeList: 'items'
        };
    },
    methods: {
        switchList (tab) {
            this.activeList = tab;
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
