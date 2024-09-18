var obj = {
    name: "Abc",
    age: 100,
    designation: "Owner",
    salary: 10
}

var { salary: userSalary, age: userAge, name } = obj;

var myArray = [1000, 2000, 3000, 4000, 5000, 6000, 7000]

var [firstValue, secondValue, ...thirdArray] = myArray

debugger;