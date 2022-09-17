// let value_original = 100;
// let value_copy = value_original;
// console.log(value_original, value_copy);

// value_original = 400;
// console.log(value_original, value_copy);

// const array_original = [1, 2, 3, 4, 6, 77, 88 ];
// // let array_copy = array_original; // Shallow copy - Not recommended
// let array_copy = [...array_original]; // Deep Copy
// console.log(array_original);
// console.log(array_copy);

// array_original.push(9999);

// console.log(array_original);
// console.log(array_copy);
console.log("Given array");
const array_num=[20,3,4,56,90,400,49]
console.log(array_num);
console.log("1.");
let array_copy = array_num;
let deep_copy = [...array_num]

console.log(array_copy);
array_copy.splice(4,0,55,66)
console.log(array_copy);
console.log("2");
console.log(deep_copy);
deep_copy.push(10,25)
console.log(deep_copy);


console.log("3");

const array_even=[2,30,14,18]
const merge=[...array_num,...array_even]
console.log(merge);

console.log(4);

const employee_info={
   emp_id:27,
   emp_name:"John Doe",
   salary:{
      july_month:"40,000INR",
      aug_month:"50,000INR",
      jun_month:"65,000INR"
   
   },
   address:{
      locality:{
         colony:"OM Vrindavan Society",
         street:"Kanch Pokli,431202",
      },
      city:"Mumbai",
      state:"Maharashtra",
      country:"India"
   },
   mobiles:["+91 8600 3456 88","1800-4567 32","+91-9096 5678 77"],
   employe_details:function(){
      return `emplye details ${this.locality}${this.city}${this.state}${this.country}${this.mobiles} ${this.street}`
      
   },
   
  

   
}
let employee_deep = {...employee_info}
employee_deep.address.locality.street="koperkhairane,400709"
console.log(employee_deep.address.locality);
 let mobiles="+91 8600 3456 88,1800-4567 32,+91-9096 5678 77"




const employe_details=JSON.parse(JSON.stringify(employee_info));



