// Single Threaded - 1 (One Thing at a time)
// Multi Threaded - 0 (Asynchronous Code)

// Request One (JavaScript) - www.myApplication.com (Thread 1) - User => goes Database and getUser Details (verify) (2 Seconds) (TimeConsuming Task)
// => All the Available Item(Database)(4 Seconds) ((TimeConsuming Task))
// => Past Buy(3 Seconds) => Recommendation (3 Seconds)  => response (4.15 Seconds)

// Worker Thread ES6
// =>   Request One (Java) - www.myApplication.com (Thread 1) - User => goes Database and getUser Details (verify) (2 Seconds) (TimeConsuming Task)
// => All the Available Item(Database)(4 Seconds) ((TimeConsuming Task))
// => Past Buy(3 Seconds) => Recommendation (3 Seconds)  => response (12 Seconds)

// Javascript has got Single threaded Execution Model (Synch) with multiple thread in background for Asynch Programming on the fly

var count = 20;
var sum = 0;

setTimeout(function firstFunction() {
    console.log("Timer 1")
}, 10000)

setTimeout(function firstFunction() {
    console.log("Timer 1")
}, 30000)

setTimeout(function secondFunction() {
    console.log("Timer 2")
}, 15000)

setTimeout(function threeFunction() {
    console.log("Timer 3")
}, 20000)

setTimeout(function fourFunction() {
    console.log("Timer 4")
}, 20000)

console.log(sum)