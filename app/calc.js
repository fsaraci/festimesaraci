var num = [
    {
      "number": 4500
    },
    {
      "number": 56550
    }
  ];
  
var num1 = [
    {
      "number": 4500
    },
    {
      "number": 56550
    }
    ,
    {
      "number": 56550
    }
  ];
  
  let array = Object.entries(num).map(([key,value])=>value);
  let array1 = Object.entries(num1).map(([key,value])=>value);

/*var result = num.reduce(function(_this, val) {
    return _this + val.number
}, 0);
var result1 = num1.reduce(function(_this, val) {
    return _this + val.number
}, 0);*/

//console.log(result+result1)
console.log(array[0].number+array1[1].number)