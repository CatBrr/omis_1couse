let x:number=10
function sum(x:number, y:number):number {
  return x + y
}
let a:string[]=["apple", "banana", "cherry"]
//creating your type class 
interface ICars{
    wheels?: number,
    color: string | number
}
let car:ICars={
    wheels:5,
    color:"red"
}
//list with indexes 
enum Statuses{
  active='active',
  not_active='not active',
  deleted='deleted'
}
let my_status=Statuses.not_active
console.log(my_status);
//tuple
let b:[string,boolean,number]=["apple", true, 42]
//type
type MyCarType=string
let cartype: MyCarType = "Honda";
// generic
function sum1<N1,N2>(x:N1,y:N2):[N1,N2]{
  console.log('result:'+((x as number)+(y as number)));
  
  return [x,y]
}
console.log(sum1<number,number>(10,15));

