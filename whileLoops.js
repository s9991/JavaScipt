// var index=5;
// while(index<=10){
//     console.log(index);
//     index++

// }

// function is_even_positioned(my_string) {
//     console.log(`Even Positioned Characters`);
//     var my_string = "Hard work always pays back";
//     for (let index = 0; index < my_string.length; index++) {
//         if (index % 2 == 0) {
//             var char = my_string.charAt(index);
//             if (char != "") {
//                 console.log(`${my_string.charAt(index)}`);
//             }
//         }
//     }
// }
// var my_string = "Hard work always pays back";
// is_even_positioned(my_string)

// var my_name=sankalp
// my_name="sankalp pendharkar"

// function tables(){

// var table = 5;

// for(var i=1; i<=10;i++){
//  var result = i * table;
//  console.log(result)

// }
// }

// tables()

var my_name = "Mohit"; // Global variable
// Block scope 
if(true) {
   var salary = "400000"; // block scoped variable
   console.log(salary); 
   console.log(my_name); 
}
 console.log(salary); 
console.log(my_name); 


function display() {
    var my_city = "Pune";
    if(true) {
        const my_PIN = 12345; 
        let my_state = "MH";
        var my_country = "India";
        console.log(my_state); 
              
     console.log(my_PIN);  
     console.log(my_city); 
     console.log(my_country); 
    }

}
 console.log(my_country); 

display()


