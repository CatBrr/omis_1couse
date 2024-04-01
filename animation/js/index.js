var x =120

let y = 12

const c =10

let abc=['a','b','v','d']
//key:value
let ints={
    a:1,
    b:2,
    v:3,
    d:4,
    fn: function() {
        return 'test function'
    },
    fn2: function() {
        return this
    },
    fn3: () => this
};
console.log(ints.fn()); 
console.log(ints.fn2()); 
console.log(ints.fn3()); 
for (let index = 0; index < abc.length; index++) {
    console.log(abc[index]);
    
}
for (let index = abc.length; index >= 0; index--) {
    console.log(abc[index]);
    
}
abc.forEach(function(item,i,abcagain){
    console.log(item,i);
    console.log(abcagain);
});
function getName(name){
    console.log(this);
    console.log("My name is " + name);
}
function listCars(...cars){
    for (let index = 0; index < cars.length; index++) {
        const element = cars[index];
        console.log(element);
    }
}
listCars('Toyota', 'Honda', 'Ford', 'Chevrolet');

function getMyName(firstName) {
    return `My name is ${firstName}`;
}
console.log(getMyName('Daria'));
let addnumbers=() => {
    console.log(this);
    console.log('hello!')
};
addnumbers()
getName('Daria')
//class
class numbers{
    constructor(newValue=20){
        this.num = newValue;
    }
    num=32
    add(y){
        return this.num+y
    }
}
let n = new numbers(77);
console.log(n.add(5));