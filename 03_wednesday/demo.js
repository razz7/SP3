
console.log("Hello World, i Know how to count");

[1,2,3,4].forEach(n=>console.log(n));


console.log("-----------a-----------")
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);
console.log(all)

console.log("-----------c-----------")

var commall = all.join(", ");
console.log(commall)
var hyphenall = all.join(" - ");
console.log(hyphenall)


console.log("-----------d-----------")
all.push("Lone")
all.push("Gitte")
console.log(all)

console.log("-----------e-----------")
all.unshift("Kurt")
all.unshift("Hans")

console.log(all)

console.log("-----------f-----------")
all.shift();
console.log(all)

console.log("-----------g-----------")
all.pop()
console.log(all)

console.log("-----------h-----------")
all.splice(4, 2)
console.log(all)

console.log("-----------i-----------")
all.reverse()
console.log(all)

console.log("-----------j-----------")
all.sort()
console.log(all)

console.log("-----------k-----------")


console.log("-----------l-----------")
var allupper = all.map(x => x.toUpperCase())
console.log(allupper)
console.log("-----------m-----------") 
var filerarr = all.filter(x => x.includes("L"))
console.log(filerarr)
