<template>
    <footer class="my-5 px-3 text-gray-500 text-xs">
        <p>
            The NIIC (NGU Idle Item Comparator) lets you compare two items from the game <a href="https://store.steampowered.com/app/1147690/NGU_IDLE/" rel="noreferrer nofollow" class="underline hover:text-gray-300">NGU Idle</a>.<br>
            The item stats are calculated based on their maximum bonus when upgraded to level 100. Select two items for both slots and the comparator will show you which stats are better. In the selector you can filter by item type (head, chest, weapon,..), by set, or search by name.
        </p>
        <div class="mt-2 flex justify-between">
            <div class="mr-3">
                &copy; {{ year }} <a href="https://kovah.de" class="underline hover:text-gray-300">Kevin Woblick</a>
            </div>
            <div>
                <a href="https://github.com/Kovah/niic" class="underline hover:text-gray-300">Source on Github</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    computed: {
        year () {
            return (new Date()).getFullYear();
        }
    }
};
</script>
