//A palindrome number is an integer that remains the same when its digits are reversed,
//  reading the same forwards and backwards (e.g., 121, 1331, 5)

// function arePalindrome(str:string):boolean{
//    let revstr:string=str.split('').reverse().join('')
//     if(revstr!=str){
//         return false
//     }
//     return true
// }

function isPalindrome(str:string):boolean{
    let right=str.length-1
    let left=0
    while(left<right){
        if(str[left]!=str[right]){
        return false
        }
        left=left+1
        right=right-1
    }
    return true
}

console.log("Is palindrome: " + isPalindrome("radars"))
console.log("Is palindrome: " + isPalindrome("radar"))
console.log("Is palindrome: " + isPalindrome("120021"))