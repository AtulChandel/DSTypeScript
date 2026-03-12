//Armstrong numbers are abc =a^3+b^3+c^3

function areArmstrongNumber(num:number):boolean{
    let count:number = 0;
    let temp:number = num;
    while(num>0){
        num=Math.floor(num/10);
        count=count+1;
    }
    num=temp;
    let sum:number = 0;
    let rem:number = 0;
    while(temp>0){
        rem=temp%10;
        sum = sum + Math.pow(rem,count);
        temp=Math.floor(temp/10);
    }
    if(sum===num){
        return true
    }
    return false
}

console.log("Is armstrong: " + areArmstrongNumber(153))
console.log("Is armstrong: " + areArmstrongNumber(9474))
console.log("Is armstrong: " + areArmstrongNumber(1532))