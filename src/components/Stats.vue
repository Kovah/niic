<template>
    <h2 class="mb-2 pl-2 text-sm font-bold uppercase">Stats</h2>
    <table class="stats-table">
        <tr>
            <td>Power</td>
            <td :class="'bonus ' + bonusClass('power')">{{ power }}</td>
        </tr>
        <tr>
            <td>Toughness</td>
            <td :class="'bonus ' + bonusClass('toughness')">{{ toughness }}</td>
        </tr>
        <tr>
            <td>Max Health</td>
            <td :class="'bonus ' + bonusClass('maxHP')">{{ maxHP }}</td>
        </tr>
        <tr>
            <td>Health Regeneration</td>
            <td :class="'bonus ' + bonusClass('hpRegen')">{{ hpRegen }}</td>
        </tr>
        <tr class="divider"></tr>
        <tr>
            <th colspan="2">Special Bonuses</th>
        </tr>
        <tr>
            <td class="bg-ngu-energy/20">Energy Power</td>
            <td :class="'bonus bg-ngu-energy/10 ' + bonusClass('ePower')">{{ ePower }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-energy/20">Energy Bars</td>
            <td :class="'bonus bg-ngu-energy/10 ' + bonusClass('eBars')">{{ eBars }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-energy/20">Energy Cap</td>
            <td :class="'bonus bg-ngu-energy/10 ' + bonusClass('eCap')">{{ eCap }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-energy/20">Energy Speed</td>
            <td :class="'bonus bg-ngu-energy/10 ' + bonusClass('eSpeed')">{{ eSpeed }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-magic/20">Magic Power</td>
            <td :class="'bonus bg-ngu-magic/10 ' + bonusClass('mPower')">{{ mPower }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-magic/20">Magic Bars</td>
            <td :class="'bonus bg-ngu-magic/10 ' + bonusClass('mBars')">{{ mBars }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-magic/20">Magic Cap</td>
            <td :class="'bonus bg-ngu-magic/10 ' + bonusClass('mCap')">{{ mCap }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-magic/20">Magic Speed</td>
            <td :class="'bonus bg-ngu-magic/10 ' + bonusClass('mSpeed')">{{ mSpeed }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-three/20">Three Power</td>
            <td :class="'bonus bg-ngu-three/10 ' + bonusClass('threePower')">{{ threePower }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-three/20">Three Bars</td>
            <td :class="'bonus bg-ngu-three/10 ' + bonusClass('threeBars')">{{ threeBars }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-three/20">Three Cap</td>
            <td :class="'bonus bg-ngu-three/10 ' + bonusClass('threeCap')">{{ threeCap }}</td>
        </tr>
        <tr>
            <td class="bg-ngu-three/20">Three Speed</td>
            <td :class="'bonus bg-ngu-three/10 ' + bonusClass('threeSpeed')">{{ threeSpeed }}</td>
        </tr>
        <tr class="divider"></tr>
        <tr>
            <td>Drop Chance</td>
            <td :class="'bonus ' + bonusClass('dropChance')">{{ dropChance }}</td>
        </tr>
        <tr>
            <td>Gold Drops</td>
            <td :class="'bonus ' + bonusClass('goldDrops')">{{ goldDrops }}</td>
        </tr>
        <tr>
            <td>Seed Gain</td>
            <td :class="'bonus ' + bonusClass('seedGain')">{{ seedGain }}</td>
        </tr>
        <tr>
            <td>Respawn</td>
            <td :class="'bonus ' + bonusClass('respawn')">{{ respawn }}</td>
        </tr>
        <tr>
            <td>Augment Speed</td>
            <td :class="'bonus ' + bonusClass('aSpeed')">{{ aSpeed }}</td>
        </tr>
        <tr>
            <td>Beard Speed</td>
            <td :class="'bonus ' + bonusClass('bSpeed')">{{ bSpeed }}</td>
        </tr>
        <tr>
            <td>NGU Speed</td>
            <td :class="'bonus ' + bonusClass('nguSpeed')">{{ nguSpeed }}</td>
        </tr>
        <tr>
            <td>Windoows Speed</td>
            <td :class="'bonus ' + bonusClass('wSpeed')">{{ wSpeed }}</td>
        </tr>
        <tr>
            <td>Daycare Speed</td>
            <td :class="'bonus ' + bonusClass('daycareSpeed')">{{ daycareSpeed }}</td>
        </tr>
        <tr>
            <td>Quest Drops</td>
            <td :class="'bonus ' + bonusClass('questDrops')">{{ questDrops }}</td>
        </tr>
        <tr>
            <td>Move Cooldown</td>
            <td :class="'bonus ' + bonusClass('moveCooldown')">{{ moveCooldown }}</td>
        </tr>
        <tr>
            <td>Yggdrasil Yield</td>
            <td :class="'bonus ' + bonusClass('yggdrasilYield')">{{ yggdrasilYield }}</td>
        </tr>
        <tr class="divider"></tr>
        <tr>
            <th colspan="2">Player Stat Boosts</th>
        </tr>
        <tr>
            <td>Attack</td>
            <td :class="'bonus ' + bonusClass('attack')">{{ attack }}</td>
        </tr>
        <tr>
            <td>Defense</td>
            <td :class="'bonus ' + bonusClass('defense')">{{ defense }}</td>
        </tr>
    </table>
</template>

<script>
import { store } from './../store.js';

function calculateBonus (itemBonus) {
    return typeof itemBonus === 'number' ? itemBonus.toLocaleString() : 0;
}

function calculatePercentBonus (itemBonus) {
    return calculateBonus(itemBonus) + '%';
}

function bonusIsNull (item, bonusType) {
    return Object.entries(item.bonus).length === 0 || item.bonus[bonusType] === 0;
}

export default {
    name: 'Stats',
    props: ['item'],
    data () {
        return {
            store
        };
    },
    methods: {
        bonusClass (bonusType) {
            const baseValue = this.item.bonus[bonusType];
            if (typeof baseValue === 'undefined') {
                return '';
            }
            if (store.items.filter((item) => bonusIsNull(item, bonusType)).length > 0) {
                return '';
            }
            return store.items.filter((item) => item.bonus[bonusType] > baseValue).length === 0
                ? 'text-green-300'
                : '';
        }
    },
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
            return calculatePercentBonus(this.item.bonus?.threePower);
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
        aSpeed () {
            return calculatePercentBonus(this.item.bonus?.aSpeed);
        },
        bSpeed () {
            return calculatePercentBonus(this.item.bonus?.bSpeed);
        },
        dSpeed () {
            return calculatePercentBonus(this.item.bonus?.dSpeed);
        },
        nguSpeed () {
            return calculatePercentBonus(this.item.bonus?.nguSpeed);
        },
        wSpeed () {
            return calculatePercentBonus(this.item.bonus?.wSpeed);
        },
        questDrops () {
            return calculatePercentBonus(this.item.bonus?.questDrops);
        },
        moveCooldown () {
            return calculatePercentBonus(this.item.bonus?.moveCooldown);
        },
        yggdrasilYield () {
            return calculatePercentBonus(this.item.bonus?.yggdrasilYield);
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
