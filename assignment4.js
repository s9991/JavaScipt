console.log("Assignment 04");

function display(){ 
    console.log("function is a state of statement that performs as task or produces values");

}
display()

function sankalp(){
    console.log("functions in java script are just like tools in real life,they make coding easy");
}
sankalp();
console.log("======================*======================");

function baban(firstName,lastName){
    console.log(firstName,lastName);
}
baban("sankalp","pendharkar");
console.log("---------------------------------*---------------------------");
function swap_value(cricketer,actor){
    console.log("before swapping");
    console.log(cricketer,actor);
}
swap_value("virat","anushka");
function swap_value1(cricketer,actor){
    var temp=cricketer;
    var cricketer=actor;
    var actor=temp;
    console.log("after swaaping");
    console.log( cricketer,actor); 

}
swap_value1("virat","anushka");
console.log("-------------------------------------*--------------------------");

function swap_value(value1,value2){
console.log("before swapping");
console.log(value1,value2);


}
swap_value(5000,10000);


function swap_value1(value1,value2){
var temp=value1;
var value1=value2;
var value2=temp;

console.log("after swapping");
console.log(value1,value2);}
swap_value1(5000,10000)
console.log("---------------------*--------------------------");

function add_three_numbers(arg_1,arg_2,arg_3){
    var result=arg_1+arg_2+arg_3;
    console.log("addition of three arguments:",result);
    return result
}
var add_return=add_three_numbers(10.23,600,200);

function add_three_value(arg_1,arg_2,arg_3){
    var result=arg_1+arg_2+arg_3;
    console.log("addition:",result);
    return result
}
var add_return=add_three_value("hello","good","morning!")
