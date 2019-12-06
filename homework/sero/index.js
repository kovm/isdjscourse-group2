function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}
  
consoe.log( sum(1)(2) ); // 3
consoe.log( sum(5)(-1)(2) ); // 6
consoe.log( sum(6)(-1)(-2)(-3) ); // 0
consoe.log( sum(0)(1)(2)(3)(4)(5) ); // 15