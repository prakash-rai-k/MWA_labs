function slow(callback) {
    return Math.random() > 0.5 ? callback("Error", null):callback(null, { id: 12345 });
}

/**
 * Function definition to define done() and fail() operation
 */
function exec(fn) {
    var res = fn((a, b) => [a, b]);
    return {
        done: function (fn) {
            if (res[0] === null) {
                fn(Object.keys(res[1]) + ":" + res[1].id);
            }
            return this;
        },
        fail: function (fn) {
            if (res[0] === "Error") {
                fn("Number Greater than 0.5");
            }
        }
    }
}

/**
 * For execution of the code
 */
console.time('label');
exec(slow)
    .done(function (data) {
        console.log(data);
    })
    .fail(function (err) {
        console.log("Error: " + err);
    }); 
console.timeEnd('label');