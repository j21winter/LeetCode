var list = [["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000]]
var inputString = "MCMXCIII"
inputString = inputString.split("")
console.log(inputString)
var answer = 0
function assignValues(){
    for(var i = 0; i<inputString.length;i++){
        for(var ii = 0; ii<list.length; ii++){
            if(inputString [i] == list[ii][0]){
            inputString[i] = list[ii][1]
            }
        }
    }
    console.log(inputString)
    
    return(calculate(inputString))
}

function calculate(){
if(inputString[0]>=inputString[1]){
    for(var i = 0; i<inputString.length;i++){
        answer += inputString[i]
        console.log(`calculating answer...${answer}`)}
    return answer
}
else if(inputString[0]<inputString[1]){
    answer = inputString[inputString.length-1]
    for(var i = inputString.length-2; i >= 0; i--){
        answer -= inputString[i]
        console.log(`calculating answer...${answer}`)}
    return answer
}
}
assignValues(inputString)

console.log(answer)