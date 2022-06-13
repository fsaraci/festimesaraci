function sum(arr){
    return arr.reduce(function(a,b){
        return a + b +2
    },0)
}

module.exports.sum = sum 