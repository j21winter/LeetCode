function isValid(s) {
    const stack = [];
    const closeToOpen = new Map([
        ['}', '{'],
        [')', '('],
        [']', '[']
    ]);

    for (const bracket of s) {
        if (closeToOpen.has(bracket)) {
            if (stack.pop() !== closeToOpen.get(bracket)) {
                return false;
            }
        } else {
            stack.push(bracket);
        }
    }

    return stack.length === 0;
}
console.log(isValid("[(])"))