function countEvenOddTotal(arr){
    const counters={
        even:0,
        odd:0,
        total:0
    }
    const repeatNumbers=[]
    let isContinue=false
    counters.total=arr.length

    for (let i=0;i<arr.length;i++){

        if(isNaN(arr[i])){
            throw(`Error:${arr[i]} is not a number `)
        }
        for(let j=0;j<repeatNumbers.length;j++){
            if(arr[i]===repeatNumbers[j]){
                isContinue=true
                break
            }
        }
        repeatNumbers.push(arr[i])

        if(isContinue){
            isContinue=false
            continue;
        }
        if(arr[i]%2===0){
            counters.even++
        }else{
            counters.odd++
        }
    }
    return counters
}
console.log(countEvenOddTotal([6,3,3,4,13,6,7,18,7,11]))
console.log(countEvenOddTotal([6,'A',3,4,13,6,7,18,7,11]))

