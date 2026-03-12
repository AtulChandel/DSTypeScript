function areOnlyDigits(str:string):boolean{
    for(let i=0;i<str.length;i++){
        if(str.charAt(i) <'0' || str.charAt(i) >'9'){
            return false
        }
    }
    return true
}

console.log("is digit only: " + areOnlyDigits("12345"))
console.log("is digit only: " + areOnlyDigits("abc123"))
console.log("is digit only: " + areOnlyDigits("abcdefgh"))