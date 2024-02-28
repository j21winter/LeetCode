class MinStack {
    constructor(){
        this.stack = []
        this.minStack = []
    }

    push(val) {
        this.stack.push(val)

        if(this.minStack.length === 0 || val < this.minStack[this.minStack.length - 1]){
            this.minStack.push(val)
        } else {
            this.minStack.push(this.minStack[this.minStack.length -1])
        }
    }

    pop(){
        this.stack.pop()
        this.minStack.pop()
    }

    getMin(){
        return this.minStack[this.minStack.length -1]
    }


    top(){
        return this.stack[stack.length-1]
    }
}