// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
    return clearReverseSortStr(stringA) === clearReverseSortStr(stringB)
}

function clearReverseSortStr(string) {
    return string.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

/* function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g,'').toLowerCase();
    stringB = stringB.replace(/[^\w]/g,'').toLowerCase();
    let aMap = new Map();
    let bMap = new Map();
    
    for(c of stringA) {
        if(aMap.get(c) == undefined) {
            aMap.set(c,1);
        } else {
            aMap.set(c, aMap.get(c)+1);
        }
    }

    for(c of stringB) {
        if(bMap.get(c) == undefined) {
            bMap.set(c, 1);
        } else {
            bMap.set(c, bMap.get(c)+1);
        }
    }

    if(aMap.size != bMap.size)
        return false;
    for(let key of aMap.keys()) {
        if(aMap.get(key) != bMap.get(key)){
            return false;
        }
    }

    return true;
} */

module.exports = anagrams;
