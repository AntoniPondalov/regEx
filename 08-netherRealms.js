function netherRealms(str){
    let splittingPattern = /\s*,\s*/;
    let demonNames = str.split(splittingPattern);
    let healthPattern = /[^0-9+\-*\/.]/g;
    let baseDamagePattern = /[+-]?\d+(\.\d+)?/g;
    let damageModifyPattern = /[*\/]/g
    let demons = {};
 
    for (const name of demonNames) {
        let healthMatch = name.match(healthPattern);
        let health = 0;
        if(healthMatch){
            for (const symbol of healthMatch) {
                let ascii = symbol.charCodeAt();
                health += ascii;
            }
        }
 
        let baseDamageMatches = name.match(baseDamagePattern);
 
        let baseDamage = 0;
        if(baseDamageMatches){
            for (let element of baseDamageMatches) {
                element = +element;
                baseDamage += element;
            }
        }
 
        let damageMoifyMatches = name.match(damageModifyPattern);
 
        if(damageMoifyMatches){
        
        for (const operator of damageMoifyMatches) {
            if(operator === "*"){
                baseDamage *= 2;
            } else {
                baseDamage /= 2;
            }
        }
    }
        demons[name] = {health, baseDamage}
    }
    let entries = Object.entries(demons).sort((a,b) => a[0].localeCompare(b[0]) );
   
    for (const [demonName, demonProp] of entries) {
        console.log(`${demonName} - ${demonProp.health} health, ${demonProp.baseDamage.toFixed(2)} damage`)
    }
}
netherRealms('M3ph-0.5s-0.5t0.0**')