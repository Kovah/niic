<template>
    <footer class="my-5  text-gray-500 text-xs">
        <p>The NIIC (NGU Idle Item Comparator) lets you compare two items from the game <a href="https://store.steampowered.com/app/1147690/NGU_IDLE/" rel="noreferrer nofollow" class="underline hover:text-gray-300">NGU Idle</a>.</p>
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
