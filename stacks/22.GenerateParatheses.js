function generateParentheses (n) {
    const result = []
    const stack = []

    function options (openCount,closeCount){

        if(openCount < n){
            stack.push('(')
            options(openCount +1, closeCount, stack)
            stack.pop()
        }

        if(openCount > closeCount){
            stack.push(')')
            options(openCount, closeCount +1, stack)
            stack.pop()
        }

        if(openCount ===n && closeCount === n){
            result.push(stack.join(""))
        }
    }
    

    options(0,0,[])

    return result
}

generateParentheses(3)