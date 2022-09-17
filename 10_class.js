console.log("----------------------------------------------------------------------------------------");
console.log("                                      Assignment");
console.log("----------------------------------------------------------------------------------------");
console.log("                                      Q.1");
console.log("----------------------------------------------------------------------------------------");
class vehicle {
    brand
    model
    color
    price
    launch_year
    constructor(brand, model, color, price, launch_year) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
        this.launch_year = launch_year;
    }
}
const vehicle_tata = new vehicle("Tata", "Nexon", "Blue", "15L", 2021);
const vehicle_ford = new vehicle("Ford", "Endeavour", "Red", "30L", 2018);
const vehicle_mahindra = new vehicle("Mahindra", "Thar", "Black", "14L", 2022);
const vehicle_hyundai = new vehicle("Hyundai", "Verana", "White", "18L", 2015);
const vehicle_honda = new vehicle("Honda", "City", "Grey", "20L", 2016);

console.log(vehicle_tata);
console.log(vehicle_ford);
console.log(vehicle_mahindra);
console.log(vehicle_hyundai);
console.log(vehicle_honda);

console.log("----------------------------------------------------------------------------------------");
console.log("                                      Q.2");
console.log("----------------------------------------------------------------------------------------");

class college {
    college_name
    university
    courses
    address
    constructor(college_name, university, courses, address) {
        this.college_name = college_name;
        this.university = university;
        this.courses = courses;
        this.address = address;
    }
}
const college_mit = new college("MIT", "Pune", "BCA , MCA", "Kothrud,Pune");
const college_rit = new college("RIT", "Kolhapur", "CS, IT", "Islampur");
const college_vjit = new college("VJIT", "Mumbai", "Civil, Mechanical", "Mumbai");
const college_coep = new college("COEP", "PUNE", "E&TC", "Shivajinagar,Pune");

console.log(college_mit);
console.log(college_rit);
console.log(college_vjit);
console.log(college_coep);

console.log("----------------------------------------------------------------------------------------");
console.log("                                      Q.3");
console.log("----------------------------------------------------------------------------------------");

let college_location = {
    MIT: "Pune",
    VJIT: "Mumbai",
    IIM: "Bangaluru",
    AMITY: "Panvel",
    VIT: "Pune"
}
for (const key in college_location) {
    if (Object.hasOwnProperty.call(college_location, key)) {
        const element = college_location[key];
        console.log(`The College "${key}" is locatated in "${element}".`);
    }
}
console.log("----------------------------------------------------------------------------------------");
console.log("                                      Q.3.1");
console.log("----------------------------------------------------------------------------------------");

for (const key in college_mit) {
    if (Object.hasOwnProperty.call(college_mit, key)) {
        const element = college_mit[key];
        console.log(`${key}:- ${element}`);
    }
}
console.log("----------------------------------------------------------------------------------------");

for (const key in college_rit) {
    if (Object.hasOwnProperty.call(college_rit, key)) {
        const element = college_rit[key];
        console.log(`${key}:- ${element}`);
    }
}
console.log("----------------------------------------------------------------------------------------");

for (const key in college_vjit) {
    if (Object.hasOwnProperty.call(college_vjit, key)) {
        const element = college_vjit[key];
        console.log(`${key}:- ${element}`);
    }
}
console.log("----------------------------------------------------------------------------------------");

for (const key in college_coep) {
    if (Object.hasOwnProperty.call(college_coep, key)) {
        const element = college_coep[key];
        console.log(`${key}:- ${element}`);
    }
}
console.log("----------------------------------------------------------------------------------------");

console.log("                                      Q.4");
console.log("----------------------------------------------------------------------------------------");



let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series till 7th occurrence:-');
for (let i = 0; i <= 7; i++) {
    console.log(n1);
    nextTerm = (n1) + (n2);
    n1 = n2;
    n2 = nextTerm;
}


// function fibonacci(num) {
// console.log('Fibonacci Series till 7th occurrence:-');
// let n1 = 0, n2 = 1, nextTerm;
// for (let i = 0; i < num; i++) {
//     console.log(n1);
//     nextTerm = (n1) + (n2);
//     n1 = n2;
//     n2 = nextTerm;
// }
// }
// fibonacci(7);

// var var1=0, var2=1 ;
// console.log(" fibonacci series : ");
// console.log(var1);
// console.log(var2);
// var counter, sum;
// for(counter=2; counter<=7; counter++)
// {
// sum=var1+var2;
// console.log(sum);
// var1=var2;
// var2=sum;
// }


// var age=17;
// if(age>=18){
//     console.log(`congrats you are eligible for voting,age ${age}`);
// }else{
//     console.log(`sorry you are not elgible for voting,age ${age}`);
// }
// var age=45;
// if(age>=18){
//     console.log(`congrats you are eligible for voting,age ${age}`);
// }else{
//     console.log(`sorry you are not elgible for voting,age ${age}`);
// }
// console.log("--------------------------------------------------------");
// function gender_check(gender) { // var gender = Male 
//      if(gender === "Male") {
//       console.log(`Your are Man, Gender ${gender} `);
//      }
//      if(gender === "Female") {
//          console.log(`Your are Woman, Gender ${gender} `);   
//     }
//      if(gender === "Others") {
//         console.log(`Your are Transgender, Gender ${gender} `);    
//  }

//      if(gender != "Male" && gender != "Female" && gender !="Others") { // gender = "Male"
//         console.log(`Invalid gender ${gender}`);
    
//     } else {
//             if(gender === "Others") {
//                 console.log(`Your are Transgender, Gender ${gender} `); 
//             } else {
//                 console.log(`Invalid gender ${gender}`);
//             }
//         }
//     } 


// gender_check("Male");
// gender_check("animal");
// gender_check("Female");
// gender_check("Others");
// gender_check("bird");























































































































// function string_assignment() {
//     var given_string = "    Hey you are doing good,  keep it up       ";
//     console.log(`1. Given String: ${given_string}`);

//    var length_str =  given_string.length;
//    console.log(`2. Length : ${length_str}`);

//    var trimmed_str = given_string.trim(); // Please use this string going forward
//    console.log(`3. Trimmed String : ${trimmed_str}`);

//     var extra_spaces = length_str - trimmed_str.length;
//     console.log(`4. Extra spaces removed count : ${extra_spaces}`);

//     var pos_of_last_char =  trimmed_str.length - 1;
//     var last_char =  trimmed_str.charAt(pos_of_last_char);
//     var first_char = trimmed_str.charAt(0);
//     console.log(`5. First and last character : ${first_char}  ${last_char} `); // ${}
// }
// string_assignment();





// function add_three_numbers(num1, num2, num3) {
//     console.log("START");
//      var result = num1 + num2 + num3;
//      console.log(result);
//      console.log("END");
//      return result;
// }
// console.log(add_three_numbers(10, 20, 30));






// var num1 = 100;
// var num2 = 41;

// var result = num1 % num2;
// var res = num2 % 2;
// console.log(`Result ${res}`);

// console.log(`Result ${num1%2}`);

// var given_number =  5;
// var add_1 = ++given_number;  //given_number + 1; 
// console.log(`Add ${add_1}`);




// var num1 = 100;
// var num2 = 41;


// console.log(`== operator ${num1 == num2}`);

// console.log(` != Operator  ${num1 != num2}`);

// console.log(` > Operator  ${num1 > num2}`); // > greater than

// console.log(` < Operator  ${num1 < num2}`); // < less than

// console.log(` <= Operator  ${num1 <= num1}`); // <= less than equal

// console.log(` >= Operator  ${num2 >= 41}`); // >= greater than equals

//  // var bool_result = true && false;    // AND - &&   OR - ||    NOT - !
//  var boolean_1 = false;
//  var boolean_2 = true;

//  console.log(` AND Operator  ${boolean_1 && boolean_2}`);  // AND - &&

//  console.log(` OR Operator  ${boolean_1 || boolean_2}`); //  OR - || 

//  console.log(` NOT Operator  ${!boolean_2}`);  // NOT - !



// var check_leap_year= function(leap_year) { // null
//     if(leap_year === null || leap_year === undefined || isNaN(leap_year) ) {
//          console.log(`1. Invalid input ${leap_year}`);
//     } else {
//          if(leap_year% 4 == 0 && leap_year % 100 !=0 || leap_year%400 ==0 ) {
//              console.log(`yes Leap year.. ${ leap_year} `);
//          } else{
//              console.log(`Not a Leap year.. ${ leap_year} `);
//          }
//     }
 
//   }
 
//   check_leap_year(NaN);
//   check_leap_year(null);
//   check_leap_year(undefined);
//  check_leap_year("Twenty Twenty");
//   check_leap_year(1999);
//   check_leap_year(2000);
//   check_leap_year(1600);
//   check_leap_year(1945);




// var check_even=function(my_number){
// if(my_number==null){
//     console.log(`Invalid input:${my_number}`);
// }
// if(my_number%2==0){
//     console.log(`given no is even:${my_number}`);
// }
// }
// check_even(40)
// check_even(null)


























