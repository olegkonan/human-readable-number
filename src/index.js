module.exports = function toReadable (number) {
    //объект для единиц
    const units = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }
    //объект для десятков, кроме первой 
    const dozens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    //объект для первой десятки
    const firstDozen = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    const arrNumber = [];
    const numberHundreds = Math.floor(number / 100); //получаем целое число сотен
    const numberDozens = Math.floor((number % 100) / 10); //получаем целое число десятков
    const numberFirstDozen = number % 100; //получаем число первой десятки
    const numberUnits = Math.floor((number % 100) % 10); //получаем целое число единиц

    if (numberHundreds !== 0) {
    const readableHundreds = `${units[numberHundreds]} hundred`;
    arrNumber.push(readableHundreds);
    }
    if (numberDozens !== 0 && numberDozens !== 1) {
    const readableDozens = dozens[numberDozens];
    arrNumber.push(readableDozens);
    } else if (numberDozens !== 0 && numberDozens === 1) {
    const readableDozens = firstDozen[numberFirstDozen];
    arrNumber.push(readableDozens);
    }
    if (numberUnits !== 0 && numberDozens !== 1) {
    const readableUnits = units[numberUnits];
    arrNumber.push(readableUnits);
    }

    if (number !== 0) {
        return arrNumber.join(' ');
    } return 'zero';
}
