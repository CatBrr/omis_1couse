"use strict";
let x = 10;
function sum(x, y) {
    return x + y;
}
let a = ["apple", "banana", "cherry"];
let car = {
    wheels: 5,
    color: "red"
};
//list with indexes 
var Statuses;
(function (Statuses) {
    Statuses["active"] = "active";
    Statuses["not_active"] = "not active";
    Statuses["deleted"] = "deleted";
})(Statuses || (Statuses = {}));
let my_status = Statuses.not_active;
console.log(my_status);
//tuple
let b = ["apple", true, 42];
let cartype = "Honda";
// generic
function sum1(x, y) {
    console.log('result:' + (x + y));
    return [x, y];
}
console.log(sum1(10, 15));
