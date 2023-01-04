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
            <td>+{{ maxHP }}</td>
        </tr>
        <tr>
            <td>Health Regeneration</td>
            <td>+{{ hpRegen }}</td>
        </tr>
        <tr>
            <td colspan="2"></td>
        </tr>
        <tr>
            <td colspan="2" class="font-bold">Special Bonuses</td>
        </tr>
        <tr>
            <td class="bg-ngu-energy/20">Energy Power</td>
            <td>+{{ ePower }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-magic/20">Magic Power</td>
            <td>+{{ mPower }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-three/20">Three Power</td>
            <td>+{{ threePower }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-energy/20">Energy Bars</td>
            <td>+{{ eBars }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-magic/20">Magic Bars</td>
            <td>+{{ mBars }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-three/20">Three Bars</td>
            <td>+{{ threeBars }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-energy/20">Energy Cap</td>
            <td>+{{ eCap }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-magic/20">Magic Cap</td>
            <td>+{{ mCap }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-three/20">Three Cap</td>
            <td>+{{ threeCap }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-energy/20">Energy Speed</td>
            <td>+{{ eSpeed }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-magic/20">Magic Speed</td>
            <td>+{{ mSpeed }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-three/20">Three Speed</td>
            <td>+{{ threeSpeed }}</td>
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
            <td>Move Cooldown</td>
            <td>+{{ moveCooldown }}</td>
        </tr>
        <tr>
            <td colspan="2"></td>
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
        maxHP () {
            return calculateBonus(this.item.bonus?.maxHP);
        },
        hpRegen () {
            return calculateBonus(this.item.bonus?.hpRegen);
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
        threePower () {
            return calculatePercentBonus(this.item.bonus?.respawn);
        },
        eBars () {
            return calculatePercentBonus(this.item.bonus?.eBars);
        },
        mBars () {
            return calculatePercentBonus(this.item.bonus?.mBars);
        },
        threeBars () {
            return calculatePercentBonus(this.item.bonus?.threeBars);
        },
        eCap () {
            return calculatePercentBonus(this.item.bonus?.eCap);
        },
        mCap () {
            return calculatePercentBonus(this.item.bonus?.mCap);
        },
        threeCap () {
            return calculatePercentBonus(this.item.bonus?.threeCap);
        },
        eSpeed () {
            return calculatePercentBonus(this.item.bonus?.eSpeed);
        },
        mSpeed () {
            return calculatePercentBonus(this.item.bonus?.mSpeed);
        },
        threeSpeed () {
            return calculatePercentBonus(this.item.bonus?.threeSpeed);
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
        moveCooldown () {
            return calculatePercentBonus(this.item.bonus?.moveCooldown);
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
