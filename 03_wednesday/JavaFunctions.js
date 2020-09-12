//Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

//Function Expression
var sub = function(n1,n2){
  return n1 - n2
} 

//Callback example
var cb = function (n1, n2, callback) {
    if (typeof n1 !== "number" || typeof n2 !== "number" || typeof callback !== "function") {
        throw new Error('error!');
    }
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};


var multi = function (n1, n2) {
    return n1 * n2;
}

var div = function (n1, n2) {
    return n1 / n2
};

try {

    console.log(cb(2, 3, multi))
    console.log(cb(4, 2, div))

    console.log(add(1, 2))     // This will print 3.
    console.log(add)          // This will print "[Function: add]" and represents the method being poined at.
    console.log(add(1, 2, 3)); // This will print 3.
    console.log(add(1));	  // This will print nan since we only provide 1 parmeter.	
    console.log(cb(3, 3, add)); // This will print "Result from the two numbers: 3 + 3 = 6".
    console.log(cb(4, 3, sub)); // This will print "Result from the two numbers: 4 + 3 = 1".
    console.log(cb(3, 3, add())); // This will print en error message that says callback is not a function. 
    //We are trying to call it as a undefiend function, wher we want to call a reffence to add, and not add().
    console.log(cb(3, "hh", add));// This will print "Result from the two numbers: 3+hh=3hh.
} catch (e) {
    console.log("Error!");
}

