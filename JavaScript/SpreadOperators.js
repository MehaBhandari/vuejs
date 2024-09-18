var myArray = [10, 20, 30, 40]
var newArray = myArray;

var otherNewObject = JSON.parse(JSON.stringify(myArray))
var other = myArray.map(val => val);
Object.create(myArray);
Object.assign(myArray);
[...myArray];

newArray[2] = 300;
console.log(myArray[2]);

var userDetails = {
    userName: "Mayank",
    userAge: 35,
    userDesignation: "Developer"
}

var newObject = {
    ...userDetails,
    userName: "technoFunnel"
}

debugger;
alert(userDetails === newObject)