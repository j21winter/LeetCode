// note Fiirst Thoughts
function containsDuplicate (nums) {
    // if array.length = 1 return false
    if(nums.length === 1){
        return false
    }

    const map = {} // map to hold num frequency

    for(num of nums){
        if(map.hasOwnProperty(num)){
            return true //if value appears twice we want to return true
        } else {
            map[num] = 1 // add the value to the map 
        }
    }

    return false // if loop is completed return false
}

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))

// note Optimized

function containsDuplicate(nums){
    const set = new Set (nums) // create new set that will only hold unique values
    return set.length != nums.length //if the length of the set is not equal to the array then we will return true. Otherwise the lengths match and we return false
}