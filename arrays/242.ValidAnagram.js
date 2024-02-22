
function isAnagram(s, t){
    let re = /^[a-z]$/;

    if(s.length != t.length){ // if lengths don't match then it cannot be an anagram
        return false
    }

    const map = {} // map to hold letter frequencies

    for(let i = 0; i < s.length; i++){
        if(re.test(s[i])){
            map[s[i]] = (map[s[i]] || 0) + 1;
        }

        if(re.test(t[i])){
            map[t[i]] = (map[t[i]] || 0) - 1;
        }
    }

    return !Object.values(map).some(value => value != 0) // check if any value is not equal to 0

}

console.log(isAnagram("anagram", "nagaram"))