const { diff } = require("semver");

module.exports = function toReadable (number) {

    const oneNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const twoNumber = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let digit = number.toString().split('');
    let len = digit.length;

    if (len == 1) {
        return oneNumber[digit[0]];
    }
    if (len == 2) {
        if (number < 20) {
            return twoNumber[digit[1]];
        } else if (digit[1] == 0) {
            return dozens[digit[0] - 2];
        } else {
            return `${dozens[digit[0] - 2]} ${oneNumber[digit[1]]}`;
        }
    }
    if (len == 3 &&  digit[1] == 0 && digit[2] == 0) {
        return `${oneNumber[digit[0]]} hundred`;
    }
    else if (len == 3 && digit[1] == 0) {
        return `${oneNumber[digit[0]]} hundred ${oneNumber[digit[2]]}`;
    } 
    else if (len == 3 && digit[1] == 1) {
        return `${oneNumber[digit[0]]} hundred ${twoNumber[digit[2]]}`;
    } 
    else if (len == 3 && digit[2] == 0) {
        return `${oneNumber[digit[0]]} hundred ${dozens[digit[1] - 2]}`;
    }
    else {
        return `${oneNumber[digit[0]]} hundred ${dozens[digit[1] - 2]} ${oneNumber[digit[2]]}`;
    }
}
