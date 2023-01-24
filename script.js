function letterCombinations(digits) {
    if (!digits) {
        return [];
    }
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
        '0': '0',
        '1': '1'
    };
    let result = [''];
    for (let digit of digits) {
        let temp = [];
        for (let str of result) {
            for (let ch of map[digit]) {
                temp.push(str + ch);
            }
        }
        result = temp;
    }
    return result.sort();
}

module.exports = letterCombinations;
