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
            <td>+{{ dropChance }}</td>
        </tr>
        <tr>
            <td>Gold Drops</td>
            <td>+{{ goldDrops }}</td>
        </tr>
        <tr>
            <td>Seed Gain</td>
            <td>+{{ seedGain }}</td>
        </tr>
        <tr>
            <td>Respawn</td>
            <td>+{{ respawn }}</td>
        </tr>
        <tr>
            <td>Magic Power</td>
            <td>+{{ ePower }}</td>
        </tr>
        <tr>
            <td>Energy Power</td>
            <td>+{{ mPower }}</td>
        </tr>
        <tr>
            <td>Magic Bars</td>
            <td>+{{ eBars }}</td>
        </tr>
        <tr>
            <td>Energy Bars</td>
            <td>+{{ mBars }}</td>
        </tr>
        <tr>
            <td>Magic Cap</td>
            <td>+{{ eCap }}</td>
        </tr>
        <tr>
            <td>Energy Cap</td>
            <td>+{{ mCap }}</td>
        </tr>
        <tr>
            <td>Magic Speed</td>
            <td>+{{ eSpeed }}</td>
        </tr>
        <tr>
            <td>Energy Speed</td>
            <td>+{{ mSpeed }}</td>
        </tr>
        <tr>
            <td>NGU Speed</td>
            <td>+{{ nguSpeed }}</td>
        </tr>
        <tr>
            <td>Daycare Speed</td>
            <td>+{{ daycareSpeed }}</td>
        </tr>
        <tr>
            <td>Quest Drops</td>
            <td>+{{ questDrops }}</td>
        </tr>
        <tr>
            <td>Three Power</td>
            <td>+{{ threePower }}</td>
        </tr>
        <tr>
            <td colspan="2" class="font-bold">Player Stat Boosts</td>
        </tr>
        <tr>
            <td>Attack</td>
            <td>+{{ attack }}</td>
        </tr>
        <tr>
            <td>Defense</td>
            <td>+{{ defense }}</td>
        </tr>
    </table>
</template>

<script>
function calculateBonus (itemBonus) {
    return 0 + (typeof itemBonus === 'number' ? itemBonus : 0);
}
function calculatePercentBonus (itemBonus) {
    return calculateBonus(itemBonus) + '%';
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
        },
        dropChance () {
            return calculatePercentBonus(this.item.bonus?.dropChance);
        },
        goldDrops () {
            return calculatePercentBonus(this.item.bonus?.goldDrops);
        },
        seedGain () {
            return calculatePercentBonus(this.item.bonus?.seedGain);
        },
        respawn () {
            return calculatePercentBonus(this.item.bonus?.respawn);
        },
        ePower () {
            return calculatePercentBonus(this.item.bonus?.ePower);
        },
        mPower () {
            return calculatePercentBonus(this.item.bonus?.mPower);
        },
        eBars () {
            return calculatePercentBonus(this.item.bonus?.eBars);
        },
        mBars () {
            return calculatePercentBonus(this.item.bonus?.mBars);
        },
        eCap () {
            return calculatePercentBonus(this.item.bonus?.eCap);
        },
        mCap () {
            return calculatePercentBonus(this.item.bonus?.mCap);
        },
        eSpeed () {
            return calculatePercentBonus(this.item.bonus?.eSpeed);
        },
        mSpeed () {
            return calculatePercentBonus(this.item.bonus?.mSpeed);
        },
        nguSpeed () {
            return calculatePercentBonus(this.item.bonus?.nguSpeed);
        },
        daycareSpeed () {
            return calculatePercentBonus(this.item.bonus?.daycareSpeed);
        },
        questDrops () {
            return calculatePercentBonus(this.item.bonus?.questDrops);
        },
        threePower () {
            return calculatePercentBonus(this.item.bonus?.respawn);
        },
        attack () {
            return calculateBonus(this.item.bonus?.attack);
        },
        defense () {
            return calculateBonus(this.item.bonus?.defense);
        }
    }
};
</script>
