function sillycase(silly) {

    let sillyLengthHalftRound = Math.ceil(silly.length / 2);

    let sillyDivided = silly.split(/(\w)/).filter(letter => letter.match(/(\w)/));

    let result = "";

    for (let i = 0; i < sillyLengthHalftRound; i++) {
        result += sillyDivided[i].toLowerCase();
    }

    for (let k = sillyLengthHalftRound; k < sillyDivided.length; k++) {
        result += sillyDivided[k].toUpperCase();
    }

    return result;
}

sillycase("brian");