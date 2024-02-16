function twoSum (nums, target){
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        let match = target - nums[i]
        if(map.has(match)){
            return [map.get(match),i]
        }
        map.set(nums[i], i)
    }
    
}

console.log(twoSum([1,2,3,4,4,5,6,7,8,9], 8))