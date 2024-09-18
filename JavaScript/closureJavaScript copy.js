function abc() {
    
    var userName = "Mayank";
    var userAge = 35;

    function alert(msg) {
        console.log("Faked Out this Function: " + msg)
    }
    
    function bcd() {
        console.log(userName);
        
        function xyz() {
            console.log(userAge);
            alert("This is Fake....")
        }
        
        xyz();
    }
    
    bcd();
}

abc()