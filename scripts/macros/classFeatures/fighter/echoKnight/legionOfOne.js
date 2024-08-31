import {genericUtils, itemUtils} from '../../../../utils.js';

async function combatStart({trigger: {token}}) {
    if (!token.actor) return;
    let unleashItem = itemUtils.getItemByIdentifier(token.actor, 'unleashIncarnation');
    if (!unleashItem || unleashItem.system.uses.value) return;
    await genericUtils.update(unleashItem, {'system.uses.value': 1});
}
export let legionOfOne = {
    name: 'Legion of One',
    version: '0.12.46',
    combat: [
        {
            pass: 'combatStart',
            macro: combatStart,
            priority: 50
        }
    ]
};