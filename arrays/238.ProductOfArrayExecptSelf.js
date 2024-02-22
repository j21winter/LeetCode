function productOfSelf(nums) {

    const answer = new Array(nums.length).fill(1)

    let prefix = 1
    for(let i = 0; i < nums.length; i ++){
        answer[i] = prefix
        prefix *= nums [i]
    }
    console.log(answer)

    let postfix = 1
    for(let i = nums.length - 1; i >= 0; i --){
        answer[i] *= postfix
        postfix *= nums[i]
    }
        console.log(answer)
    
    return answer 
}

productOfSelf([1,2,3,4])