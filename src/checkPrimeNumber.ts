function checkIsPrime(num:number):boolean{
    for(let i=2; i<=num/2; i++){
        if(num%i===0){
            return false
        }
    }
    return true
}

console.log(checkIsPrime(3))
console.log(checkIsPrime(4))
console.log(checkIsPrime(29))
console.log(checkIsPrime(40))
console.log(checkIsPrime(97))