const set_numbers = new Set()
set_numbers.add(20); set_numbers.add(10); set_numbers.add(30);
set_numbers.add(109); set_numbers.add(23); set_numbers.add(33);

set_numbers.forEach( (number)=>{
    console.log(number);
});

class Employee {
    constructor(emp_id, emp_name ,emp_debt, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_debt = emp_debt;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
}
const empAnil = new Employee(22,"anil","IT",50000,"TCS");
const empRadha = new Employee(33,"Radha","HR",74000,"Wipro");
const empRishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const empsonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const empMonika = new Employee(77,"Monika","IT",40000,"Wipro");
const empVinay = new Employee(88,"Vinayak","IT",75000,"TCS");
const empMahi = new Employee(99,"Mahesh","HR",75000,"Infy");

const set_employees = new Set(  [empAnil, empRadha, empRishi, empsonali, empMonika, empVinay, empMahi]);

set_employees.forEach((employee)=> {
    console.log(employee);
});