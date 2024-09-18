async function workWithAsynAwait() {
    var countData = 0;
    var simplePromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject(Math.floor(Math.random() * 100))
        }, 20000)
    });
    
    var otherPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject(Math.floor(Math.random() * 100))
        }, 20000)
    });
    
    Promise.race([simplePromise, otherPromise]).then((data) => {
    })

    countData = await simplePromise

    console.log("Syncronous")

    for (var i = 0; i < countData; i++) {
        console.log(i)
    }
        
}

workWithAsynAwait();

// Do not alters any external value...
function pureFunction(a, b) {
    return a + b
}


