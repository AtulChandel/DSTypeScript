// An anagram string is a word or phrase formed by rearranging the letters of another,
// using all original characters exactly once, such as "listen" and "silent". They 
// must have identical character frequencies and equal lengths. Common examples include
// "cat/act," "care/race," and "funeral/realfun".

function areAnagram(str1:string, str2:string):boolean {
    let freqstr1: { [key: string]: number } = {};
    let freqstr2: { [key: string]: number } = {};
    if(str1.length !== str2.length) {
        return false;
    }
    else{
        for(let i=0; i<str1.length; i++) {
            freqstr1[str1.charAt(i)] = (freqstr1[str1.charAt(i)] || 0) + 1;
        }
        for(let i=0; i<str2.length; i++) {
            freqstr2[str2.charAt(i)] = (freqstr2[str2.charAt(i)] || 0) + 1;
        }
    }
    for (let key in freqstr1) {
        if (freqstr1[key] !== freqstr2[key]) {
            return false;
        }
    }
    for (let key in freqstr2) {
        if (freqstr2[key] !== freqstr1[key]) {
            return false;
        }
    }
    return true;
}

console.log("are anagrams: " + areAnagram("cat", "act"))
console.log("are anagrams: " + areAnagram("race", "care"))
console.log("are anagrams: " + areAnagram("funeral", "realfun"))
console.log("are anagrams: " + areAnagram("boxing", "cricket"))