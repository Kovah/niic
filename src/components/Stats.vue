<template>
    <h2 class="h2">Stats</h2>
    <table class="stats-table">
        <tr>
            <td>Power</td>
            <td>{{ power }}</td>
        </tr>
        <tr>
            <td>Toughness</td>
            <td>+{{ toughness }}</td>
        </tr>
        <tr>
            <td>Max Health</td>
            <td>+{{ maxHealth }}</td>
        </tr>
        <tr>
            <td>Health Regeneration</td>
            <td>+{{ healthRegen }}</td>
        </tr>
        <tr>
            <td colspan="2" class="font-bold">Special Bonuses</td>
        </tr>
        <tr>
            <td>Drop Chance</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>Gold Drops</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>Seed Gain</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>Respawn</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>Magic Power</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>Energy Power</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>Magic Bars</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>Energy Bars</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>Magic Cap</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>Energy Cap</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>NGU Speed</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>Daycare Speed</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>Quest Drops</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>Three Power</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td colspan="2" class="font-bold">Player Stat Boosts</td>
        </tr>
        <tr>
            <td>Attack</td>
            <td>+0%</td>
        </tr>
        <tr>
            <td>Defense</td>
            <td>+0%</td>
        </tr>
    </table>
</template>

<script>
function calculateBonus (itemBonus) {
    const bonus = 0 + (typeof itemBonus === 'number' ? itemBonus : 0);
    return bonus + '%';
}

export default {
    name: 'Stats',
    props: ['item'],
    computed: {
        power () {
            return calculateBonus(this.item.bonus?.power);
        },
        toughness () {
            return calculateBonus(this.item.bonus?.toughness);
        },
        maxHealth () {
            return calculateBonus(this.item.bonus?.maxHealth);
        },
        healthRegen () {
            return calculateBonus(this.item.bonus?.healthRegen);
        }
    }
};
</script>
