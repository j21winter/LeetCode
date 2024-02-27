function calPoints(operations){
    const record = []
    let sum = 0
    
    for (const op of operations){
        if( op === "+"){
            let num = record[record.length - 1] + record[record.length - 2]
            record.push(num)
            sum += num
        }
        else if( op === "D"){
            let num = record[record.length - 1] * 2
            record.push(num)
            sum += num
        }
        else if( op === "C"){
            sum -= record[record.length - 1]
            record.pop()
        } else {
            let num = parseInt(op)
            record.push(num)
            sum += num
        }
    }
    return sum
}

function calPoints(operations){
    const record = []

    for (const op of operations){
        if( op === "+"){
            record.push(record[record.length - 1] + record[record.length - 2])
        }
        else if( op === "D"){
            record.push(record[record.length - 1] * 2)
        }
        else if( op === "C"){
            record.pop()
        } else {
            record.push( parseInt(op))
        }
    }
    return record.reduce((current, sum) => current + sum, 0)
}

console.log(calPoints(["5","-2","4","C","D","9","+","+"]))