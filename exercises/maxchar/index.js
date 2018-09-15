// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const map = new Map();
    for(c of str) {
        if(map.get(c) === undefined) {
            map.set(c,1);
        } else {
            map.set(c, map.get(c)+1);
        }
    }
    let maxVal = 0;
    let keyRet = '';
    for(var [key, value] of map) {
        if(value > maxVal) {
            maxVal = value;
            keyRet = key;
        }
    }

    return keyRet;
}

module.exports = maxChar;
