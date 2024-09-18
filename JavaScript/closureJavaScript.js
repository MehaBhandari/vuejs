function higherOrderFunction() {
    
    var userName = "Mayank";
    
    function bcd() {
        console.log(userName);
    }
    
    return bcd;
}

var someFunction = higherOrderFunction();
someFunction();

// Closure: Each child function always retails value of Parent Scope extends till window