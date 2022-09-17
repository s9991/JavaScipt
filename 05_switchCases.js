//factorial of number 5!=1*2*3*4*5
function factorial(number){
var result=1;
for(let index=1;index<=number;index++){
    result=index*result;
    
}
    
    return result;
    
    


}
console.log(`the factorial of no 5 is ${factorial(5)}`);
console.log(`the factorial of no 5 is ${factorial(6)}`);
//console.log(result);