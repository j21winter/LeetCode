// function groupAnagrams (strs) {

//     const groupedArr = []

//     for(const word of strs){ //iterate words in given array
//         if(groupedArr.length === 0 ){
//             groupedArr.push([word])
//             continue
//         }

//         let added = false

//         for(let i = 0; i < groupedArr.length; i++){ //check against words in organized array
            
//             if(groupedArr[i][0].length === word.length){
//                 const existingWord = groupedArr[i][0].split('').sort().join('')
//                 const currentWord = word.split('').sort().join('')

//                 if(existingWord === currentWord){
//                     groupedArr[i].push(word)
//                     added = true
//                     break
//                 }
//             }
//         }

//         if(added === true){
//             continue
//         } else {
//             groupedArr.push([word])
//             added = false
//         }
//     }

//     return groupedArr
// }

// console.log(groupAnagrams())

function groupAnagrams(strs) {
    const hashmap = new Map();

    for (const word of strs) {
        const sortedWord = word.split('').sort().join('');
  
        if (hashmap.has(sortedWord)) {
            hashmap.get(sortedWord).push(word);
        } else {
            hashmap.set(sortedWord, [word]);
        }
    }
  
    return Array.from(hashmap.values());
  }

  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))