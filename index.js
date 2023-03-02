function addTwoNumbers(arrayOne, arrayTwo) {
    return conversionArrayToNumb(arrayOne)
    // return conversionArrayToNumb(arrayTwo)
    // var sum = arrayOne + arrayTwo
    // return sum 
}

function conversionArrayToNumb(array){
    const arrayReverse = array.reverse()
    const arrayJoin = arrayReverse.join('')
    const numb = parseInt(arrayJoin)
    return numb 
}

console.log(addTwoNumbers([2,4,3],[5,6,4]))
