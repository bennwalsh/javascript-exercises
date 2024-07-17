const reverseString = function (str) {
    const strRev = str.split('').reverse().join('');
    return strRev;
};

reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
