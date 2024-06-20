let packs = {
    spellFeatures: 'chris-premades.CPRSpellFeatures',
    spells: 'chris-premades.CPRSpells'
};
let featurePacks = {
    spellFeatures: 'chris-premades.CPRSpellFeatures'
};
function setUseLocalCompendium(value) {
    if (value) {
        packs.spellFeatures = 'world.cpr-spell-features';
        featurePacks.spellFeatures = 'world.cpr-spell-features';
        packs.spells = 'world.cpr-spells';
    } else {
        packs.spellFeatures = 'chris-premades.CPRSpellFeatures';
        featurePacks.spellFeatures = 'chris-premades.CPRSpellFeatures';
        packs.spells = 'chris-premades.CPRSpells';
    }
}
const attacks = [
    'msak',
    'rsak',
    'mwak',
    'rwak'
];
const meleeAttacks = [
    'mwak',
    'msak'
];
const rangedAttacks = [
    'rwak',
    'rsak'
];
const weaponAttacks = [
    'mwak',
    'rwak'
];
const spellAttacks = [
    'msak',
    'rsak'
];
const damageTypes = [
    'acid',
    'bludgeoning',
    'cold',
    'fire',
    'force',
    'lightning',
    'necrotic',
    'none',
    'piercing',
    'poison',
    'psychic',
    'radiant',
    'slashing',
    'thunder'
];
let damageTypeOptions = [
    {
        label: 'Acid',
        value: 'acid'
    },
    {
        label: 'Bludgeoning',
        value: 'bludgeoning'
    },
    {
        label: 'Cold',
        value: 'cold'
    },
    {
        label: 'Fire',
        value: 'fire'
    },
    {
        label: 'Force',
        value: 'force'
    },
    {
        label: 'Lightning',
        value: 'lightning'
    },
    {
        label: 'Necrotic',
        value: 'necrotic'
    },
    {
        label: 'No Type',
        value: 'none'
    },
    {
        label: 'Piercing',
        value: 'piercing'
    },
    {
        label: 'Poison',
        value: 'poison'
    },
    {
        label: 'Psychic',
        value: 'psychic'
    },
    {
        label: 'Radiant',
        value: 'radiant'
    },
    {
        label: 'Slashing',
        value: 'slashing'
    },
    {
        label: 'Thunder',
        value: 'thunder'
    }
];
export let constants = {
    packs,
    featurePacks,
    attacks,
    meleeAttacks,
    rangedAttacks,
    weaponAttacks,
    spellAttacks,
    damageTypes,
    damageTypeOptions,
    setUseLocalCompendium
};