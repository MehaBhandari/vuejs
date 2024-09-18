class Employee {
    constructor() {
        this.empName = 'Mayank'  // 1kb
    }
    
    getDetails() {  // 2kb
        console.log(this.empName)
    }
}

class Manager extends Employee {
    constructor() {
        this.salary = 10;
    }
}

var empData = new Employee();
var empData1 = new Employee();
var empData2 = new Employee();
var empData3 = new Employee();
var empData4 = new Employee();
var empData5 = new Employee();

// 6 Employee = 18 Kb

console.log(empData.empName)