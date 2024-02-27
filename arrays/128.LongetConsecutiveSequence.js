function longestConsecutive(nums) {

    const numSet = new Set(nums)
    let longest = 0

    for(const num of nums){
        if(!numSet.has(num-1)){

            let currentLength = 1
            let currentNum = num
            while (numSet.has(currentNum + 1)){
                currentLength ++ 
                currentNum ++
            }
        longest = Math.max(currentLength, longest)
        }
    }

    return longest
}

longestConsecutive([100,4,200,1,3,2])