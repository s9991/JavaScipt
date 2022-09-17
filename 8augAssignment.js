
const Teacher={
    first_name: 'Nupur',
    last_name: 'Bhosale',
    mobile: "1212 2p-0[] 434",
    adhar: "6632 722 4280",
    address: {
        city: "Karad",
        state: "MH",
        country: "India",
        district: "Satara",
        taluka: "Karad",
        village: "Vidyanagar",
        pin_code: 415110,
    },
    Education:{
        school:"(SSC)from sgm college karad",
        college:"(HSC)from YCC College karad",
        Masters:"(Masters)from Govt.clg of Engineer Karad",
        Phd:"(PHD)from Deccan Education Society",

    },
    Certification:{
        Hacker_Rank:"2nd prize winner(solved 5/4 problems)",
        IFE:"Level 2",
        Adv_Programming: "C++"

    },
    details: function () {
        return `Teachers Degrees are ${this.school} ${this.college} ${this.Masters} ${this.Phd}`;
    }
    

   
}
console.log(Teacher.first_name); // Access the property
console.log(Teacher.adhar);
console.log(Teacher);
console.log(Teacher.address);

console.log("==========================================");
// console.log(`Type of array ${typeof fruits}`);

// console.log(`Total fruits : ${fruits.length}`);

// let fruit_0 = fruits[0];

// let fruit_3 = fruits[3];
// let length_fruits = fruits.length-1;
// console.log(`Fruits at position ==> 0 ${fruit_0}, 3  ${fruit_3}, Last Element ${fruits[length_fruits]}`)
// console.log("-------------- Total Elements in the array - fruits ---------------")
// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log(`${element}`);
// }
// const mango_index =  fruits.indexOf("Mango");
// console.log(`fruits.indexOf("Mango")  ${mango_index}`);


// const student={
//     First_name : "sankalp",
//     last_name : "Pendharkar",
//     age:22,
//     adress: "koperkhairane(Navi Mumbai)",
//     Marks:"80%"

// }
// Object.keys()

// const Fruits = [
//     "banana",
//     "orange",
//     "apple",
//     "mango",
//     "watermelon",
   
// ];
// console.log(fruits);
// console.log("log the first and lst element on console");
// let fruit0= fruits[0];
// let last_element= fruits[4];
// console.log(`first fruit: ${fruit_0},last fruit:${last_element}`);
// console.log("add element pappaya before banana");
// fruits.unshift("papaya")
// console.log(fruits)
// fruits.pop()
// console.log(fruits);
// fruits.push("pineapplle")
// console.log(fruits);

// function Person(name){
//     this.name = name;
//   }
  
//   var m = function(){
//     return "Hello " + this.name;
//   };
  
//   Person.prototype.getGreeting = m;
  
//   var p = new Person('anybody');
  
//   console.log(p.getGreeting());
// const myObject = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
    
// }


  







