// Do not alters any external value...
// Impact of using "this" keyword

function impureFunctionOther() {
    this.name = "TechnoFunnel"
    this.count += 100
}

var myObj2 = {
    name: "Abc",
    count: 1
}


var myObj1 = {
    name: "Mayank",
    count: 1
}

var myObj3 = {
    name: "Xyz",
    count: 16324
}

impureFunctionOther.call(myObj3)

function pureFunctionOther(inputObject) {
    inputObject.name = "TechnoFunnel"
    inputObject.count += 100
}

pureFunctionOther({ ...myObj })

console.log(myObj.name)
console.log(myObj.count)

function pureFunction(a, b) {
    return a + b
}
pureFunction(1, 2) => 3 // 1 million Time


