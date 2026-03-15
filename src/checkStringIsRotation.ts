function checkIsRotation(str1:string,str2:string):boolean{
    let tempstr:string=str1+str1
    if(tempstr.includes(str2)){
        return true
    }
    return false
}

console.log(checkIsRotation("aba", "baa"))
console.log(checkIsRotation("monkeycap","capmonkey"))
console.log(checkIsRotation("abc","abe"))