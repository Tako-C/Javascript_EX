const number = 1234567908
function nextSmaller(number) {
    const NumString = number.toString()
    const NumArray = NumString.split('')


    if (NumArray.every((currenNum) => currenNum === NumArray[0])) {

        return console.log(`${number} " is duplicate"`)

    } else {
        if (NumArray.length >= 2) {
            for (let i = 1; i <= NumArray.length; i++) {
                const nextNum = NumArray[NumArray.length - i]
                NumArray[NumArray.length - i] = NumArray[NumArray.length - (i +1)]
                NumArray[NumArray.length - (i+1)] = nextNum

                if (parseInt(NumArray.join('')) > number ) {
                    return -1
                }else {
                    return parseInt(NumArray.join(''))
                    
                } 

                
        
            } 
            return -1
        }
    }
}

console.log(nextSmaller(number))