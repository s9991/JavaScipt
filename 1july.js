console.log("assignment 4");
var result=function(number1,number2){

    result=number1>number2?number1:number2;
    console.log("the given num are(-10,10)");
    console.log(` the num greater is: ${result}`);
}
result(-11,12);

var result=function(number1,number2){

    result=number1<number2?number1:number2;
    console.log("the given num are(800,890)");
    console.log(` the num greater is: ${result}`);
}
result(800,890);
console.log("---------------------------------------------------------------------");

var result=function(value){
    var num_1=29;
    var result=num_1%3!==0?"even":"odd";
    console.log(`givin no is "29"is:${result}`);

    var num_2=44;
    var result=num_2%2==0?"even":"odd";
    console.log(`given no is "44" is: ${result}`);


    var num_3=0;
    var result=num_3%2==0?"even":"odd";
    console.log(`given no is "0"is :${result}`);


    var num_4=101;
    var result=num_4%2==0?"even":"odd";
    console.log(`given number "101" is : ${result}`);




}
result();
console.log("--------------------------------------------------------");
var even_odd_length=function(word){
    var word1="javascript";
    var length=word1.length;
    var word1_result=word1.length%2==0?"even":"odd";
    console.log(`length of "javascript" is :${length} and it is ${word1_result}`);
    
}
even_odd_length()