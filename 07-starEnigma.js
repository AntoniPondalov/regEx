function starEnigma(arr) {
    let messageCount = +arr.shift();
    let starPatern = /[star]/gi;
    let decryptedMessages = [];

    for (let i = 0; i < messageCount; i++) {
        let encryptedMessage = arr[i];
        let matches = encryptedMessage.match(starPatern);

        let matchCount = matches ? matches.length : 0;

        let decryptedMessage = "";

        for (const symbol of encryptedMessage) {
            let ascii = symbol.charCodeAt();
            ascii -= matchCount;
            let newSymbol = String.fromCharCode(ascii);
            decryptedMessage += newSymbol;

        }
        decryptedMessages.push(decryptedMessage);
    }

    let attackedPlanets = [];
    let destroedPlanets = [];

    let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/

    for (const message of decryptedMessages) {
        let match = planetPattern.exec(message);
        if (match) {
            let { name, type } = match.groups

            if (type === "A") {
                attackedPlanets.push(name);
            } else {
                destroedPlanets.push(name);
            }
        }
    }
    attackedPlanets.sort((a, b) => a.localeCompare(b))
    destroedPlanets.sort((a, b) => a.localeCompare(b))
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    for (const planet of attackedPlanets) {
        console.log(`-> ${planet}`)

    }
    console.log(`Destroyed planets: ${destroedPlanets.length}`);
    for (const planet of destroedPlanets) {
        console.log(`-> ${planet}`)
    }
}
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'])