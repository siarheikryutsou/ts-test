function myFunction(args) {
    return args;
}
var myFunction2 = function (args) {
    return args;
};
myFunction(1);
myFunction("hi!");
var MyClass = /** @class */ (function () {
    function MyClass(myField) {
        this.myField = myField;
    }
    MyClass.prototype.getMyField = function () {
        return this.myField;
    };
    return MyClass;
}());
var myClassString = new MyClass("myFieldValueString");
var myClassNumber = new MyClass(123);
var pair = {
    key: "1",
    value: 1
};
function getLength(value) {
    return value.length;
}
document.write("\n    ".concat(myFunction(1), "\n    <br/>\n    ").concat(myFunction("hi!"), "\n    <br/>\n    ").concat(myFunction2(2), "\n    <br/>\n    ").concat(myFunction2("hi2!"), "\n    <br/>\n    ").concat(myClassString.getMyField(), "\n    <br/>\n    ").concat(myClassNumber.getMyField(), "\n    <br/>\n    ").concat(pair.key, ":").concat(pair.value, "\n    <br/>\n    ").concat(getLength("string"), "\n    <br />\n    ").concat(getLength([1, 2, 3, 4, 5]), "\n"));
