<template>
    <div>
        <div class="sm:flex items-end mb-4">
            <div class="sm:ml-auto sm:text-right">
                <input type="text" name="search" class="input mb-1" placeholder="Search sets..."
                    v-on:input="filterByName">
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4">
            <div class="cursor-pointer" v-for="set in setList" v-on:click="appySet(set)">
                <div class="name">{{ set.name }}</div>
                <div class="ml-auto flex items-center flex-wrap">
                    <div class="single-item" v-for="item in set.items">
                        <img :src="'/items/' + item + '.png'" :alt="item" loading="lazy">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import setData from '../set-data.json';

export default {
    name: 'SetList',
    data () {
        return {
            typeFilters: [],
            nameFilter: null,
            setFilter: null
        };
    },
    computed: {
        setList () {
            let sets = setData;
            if (this.nameFilter !== null) {
                sets = sets.filter((item) => item.name.toLowerCase().includes(this.nameFilter));
            }
            return sets;
        }
    },
    methods: {
        appySet (item) {
            this.$parent.applyItem(item);
        },
        filterByName (event) {
            const newName = event.target.value;
            this.nameFilter = newName !== '' ? newName.toLowerCase() : null;
        },
    }
};
</script>
