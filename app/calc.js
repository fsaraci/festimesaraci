var num = [
    {
      "number": 4500
    },
    {
      "number": 56550
    }
  ];
  
  
var result = num.reduce(function(_this, val) {
    return _this + val.number
}, 0);
var num1 = [
    {
      "number": 4500
    },
    {
      "number": 56550
    }
  ];
  
  
var resultt = num.reduce(function(_this, val) {
    return _this + val.number
}, 0);

console.log(result+resultt)