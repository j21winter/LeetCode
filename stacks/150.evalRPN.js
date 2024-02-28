function evalRPN (tokens){
    const stack = []

    tokens.forEach(token => {
        if(!isNaN(token)){
            stack.push(Number(token))
        } else {
            const secondNum = stack.pop() // last number 
            const firstNum = stack.pop() // second to last number

            switch(token){
                case '+':
                    stack.push(Math.trunc(firstNum + secondNum))
                    break
                case '/':
                    stack.push(Math.trunc(firstNum / secondNum))
                    break
                case '*':
                    stack.push(Math.trunc(firstNum * secondNum))
                    break
                case '-':
                    stack.push(Math.trunc(firstNum - secondNum))
                    break
            }

        }
        console.log(stack)
    })

    return stack[0]
}

evalRPN(["4","13","5","/","+"]
)