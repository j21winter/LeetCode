const fs = require('fs');

const decode = () => {
    // Read txt file
    const messageString = fs.readFileSync('./coding_qual_input.txt', 'utf8');

    if(messageString.length < 1){
        return null;
    }

    // split the string into an array of words and number pairs
    const messageArr = Array.from(messageString.matchAll(/(\d+) (\S+)/g), match => [parseInt(match[1]), match[2]]);


    // sort the array in asc order based on the number in the pair 
    const sortedArray = messageArr.sort((a,b) => a[0] - b[0]);

    let count = 0;   //what index we are accessing
    let level = 1;   // how much to increment the count
    let decodedMessage = "";

    while (count <= sortedArray.length){ //loop the array to find the words 

        if(!sortedArray[count][1]){ //check data is valid
            count ++;
        } else {
            decodedMessage += " " + sortedArray[count][1]; // push the word into our decoded message string
            level ++; // increase the level 
            count += level; // increment the count by the level 
        }

    }

    return decodedMessage.trim();
};

const finalMessage = decode();




