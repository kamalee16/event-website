const employee={
    name:"arun",age:54
};

console.log(employee.name);
console.log(employee["age"]);

employee.age=45;
employee.salary=35000
console.log(employee);

delete employee.age;
console.log(employee)


//nested objects
const student={
    name:"priya",
    age:21,
    course:"react",
    address:{
        city: "chennai",
        state:"tamil nadu"
    }
};

console.log(student.name);
console.log(student.address.city);

//destructuring--extracts properties into variables.
const{ name, age, course}=student;
console.log(name);
console.log(age);
console.log(course);
//destructuring--renaming and adding new property

const user={
    name: "priya"
};

const {
    name: username,
    city="chennai"
}=user;
console.log(username);
console.log(city);

//spread for object---to copy all the properties for from one onject to other.
const update={
    ...user,
    age: 22,
    city:"chennai"
}

//template literals
const name="priya"
const msg='my name is ${name}'

//if the object is not defined it show error and it stop the next line execusion
//to overcome we ise(?.) to handle the error
const user={
    name: "priya",
    age=21
};
console.log(user.contact?.phone)//output is undefined

//nullish coaleshion---to define a default value even if it not defined the default value will show
const username=null;
const age=0;

console.log(username?? "guest")
