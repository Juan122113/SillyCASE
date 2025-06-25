function sillycase(silly) {
  
    let sillyLength = silly.length;

    let sillyLengthHalftRound = Math.ceil(sillyLength / 2);

    let sillyDivided = silly.split(/(\w)/).filter(letter => letter.match(/(\w)/));

    let firstHalft;

    console.log(typeof (sillyDivided[0]))

    return sillyDivided;
}

console.log(sillycase("brian"));