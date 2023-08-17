
function printName() {
    let helloname = "Hello Jonh"

    function inner() {
        return helloname
    }
    return inner()
}
console.log(printName());

