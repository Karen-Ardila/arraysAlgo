//Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(array, additionalValue) {
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1]
    }
    array[0] = additionalValue;

    return array;
}

console.log(pushFront([3, 5, 7, 9], 10));

//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(array) {
    let remove = array[0]
    array.shift
    return remove;
}
console.log(popFront([3, 5, 6, 7, 8]));

//Given an array, index, and additional value, insert the value into array at given index.
function insertAt(array, index, value) {
    for (let i = array.length; i > index; i--) {
        array[i] = array[i - 1]
    }
    array[index] = value;
    return array;
}
console.log(insertAt([2, 4, 6, 5, 7, 10, 11], 3, 1));

//Given an array and an index into array, remove and return the array value at that index.
function removeAt(array, index) {
    let remove = array[index]
    for (let i = index; i < array.length-1; i++) {
        array[i] = array[i+1]
    }
    array.legth = array.length-1
    return remove;
}
console.log(removeAt([1,3,5,7,8,9,10], 3))
//Swap positions of successive pairs of values of given array. If length is odd, do not change the final element
function swapPair(array) {
    for (let i = 0; i < array.length; i = i + 2) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
    }
    return array
}
console.log(swapPair([7, 8, 9, 10]))
//Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but 
//noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values 
//will be grouped together. As with all these array challenges, do this without using any built-in array methods.
function removeDup(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            newArr.push(arr[i]);
        }

    }
    return newArr;

}
console.log(removeDup([1, 2, 3, 3, 3, 4, 5, 5, 6, 7, 8, 8]))