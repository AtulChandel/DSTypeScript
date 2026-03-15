function checkDuplicateElements(arr:number[]):number[]{
    const uniqnumbers = new Set<number>();
    const dupnumbers = new Set<number>();
    for (const num of arr){
        if (uniqnumbers.has(num)) {
            dupnumbers.add(num);
        } else {
            uniqnumbers.add(num);
        }
    }

    return Array.from(dupnumbers);
}
console.log(checkDuplicateElements([1,2,3,4,5,6,2,6]))