const array_numbers = [20,30,4,5,6,7,8,11]
for (let index = 0; index < array_numbers.length; index++) {
    const element =  array_numbers[index];
    console.log(element);
    
}
array_numbers.forEach(function(element,san){
  
    console.log(element,san);
});
array_numbers.forEach(  (element,index) => 
console.log(element,index)
    
);
console.log("===================================");
//find out numbers which are greater than 10
array_numbers.forEach(element => {
    if (element+2) {
        console.log(element);
        
    }
    
})