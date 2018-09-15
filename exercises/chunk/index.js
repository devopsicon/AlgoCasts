// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index+size));
        index+= size;
    }

    return chunked;
}

/* function chunk(array, size) {
    retArr=[];
    accArr = [];
    for(elem of array) {
        if(accArr.length == size) {
            retArr.push(accArr);
            accArr = [];
        }
        accArr.push(elem);
    }

    retArr.push(accArr);

    return retArr;
}
 */
module.exports = chunk;
