// function topKFrequent (nums, k) {
//     const map = new Map()
//     const sortedFreq = new Array(nums.length + 1)
//     const result = []

//     // count frequency of the nums in a map
//     for(let i = 0; i < nums.length; i++){
//         map.set(nums[i], (map.get(nums[i]) || 0) + 1)
//     }

//     // sort the frequencies
//     for( const [num, freq] of map){
//         sortedFreq[freq] = sortedFreq[freq] || []
//         sortedFreq[freq].push(num)
//     }

//     let j = sortedFreq.length - 1
//     while(result.length < k){
//         if(sortedFreq[j]){
//             for(num of sortedFreq[j]){
//                 result.push(num)
//             }
//         }
//         j --
//     }
    
//     return result
// }

console.log(topKFrequent([1,1,1,2,2,3], 2))

// note more optimized
var topKFrequent = function(nums, k) {
    // Step 1: Initialize a Map to store the frequency of each element
    const map = new Map();
  
    // Step 2: Count the frequency of each element using forEach
    nums.forEach(val => map.set(val, (map.get(val) || 0) + 1));
  
    // Step 3: Extract unique elements from nums using Set and sort them based on frequency
    const sortedNums = Array.from(new Set(nums)).sort((a, b) => map.get(b) - map.get(a));
  
    // Step 4: Return the top k frequent elements
    return sortedNums.slice(0, k);
  };