const employee={
    emp_id: 123,
    emp_name: "sonal take"
}
const adress ={
    street: "as club",
    city: "pune"
}
//cloning object
const emp_clone = Object.assign(employee);
console.log(emp_clone);
//merge an object-employee and adress
const merged_obj = Object.assign(employee,adress);
console.log(merged_obj);
console.log("=====================================");

array.forEach(element => {
    
});