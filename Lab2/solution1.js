Array.prototype.even = function () {
    const nums = Array.from(this);
    return nums.filter(num => num % 2 === 0);
}

Array.prototype.odd = function(){
    const nums =Array.from(this);
    return nums.filter(num => num%2!==0);
}
var arr = [1,2,3,4,5,6,7,8];
console.log('Even numbers in array :' + arr.even());
console.log('Even numbers in array :' + arr.odd());