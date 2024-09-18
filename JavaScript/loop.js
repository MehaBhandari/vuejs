let data = [12, 3, 4, 5, 6, 7, 8]

var myObject = {
    userName: 'Mayank',
    userDesignation: 'Owner',
    userAge: 10
}

for (var arrayElement of data) {
    console.log(arrayElement)
}

for (var key in myObject) {
    console.log(key)
}