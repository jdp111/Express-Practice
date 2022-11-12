function mean(array){
    var total = 0;
    for (number of array){
        total += number
    }
    const num = array.length;
    const result = total / num;
    return result
}


function median(array){
    function compareNumbers(a, b) {
        return a - b;
    }
    array.sort(compareNumbers)
    console.log(array)
    const middle = (array.length-1)/2;
    const result = (array[Math.ceil(middle)] + array[Math.floor(middle)])/2
    return result
}



function mode(array){
    var result = NaN;
    var highCount = 0;

    for (num of array){
        const count = array.filter(curr => curr==num).length;
        if (count > highCount){
            result = num;
            highCount = count
        }
    }
    return result
}

module.exports = {mean, median, mode}