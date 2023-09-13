//Define a strict type

import { string } from "prop-types";

let variable  = "hello"
//Strings only not any data types
variable = "hi"

//you can also have a initial value
let ageWithType: number = 22;
// ageWithType  = "eighteen" note there is a warning
ageWithType  = 18

let testString: string
testString = "hello"

let testBoolean: boolean

//Only value here is true or false
testBoolean = true

//You can use multiple types... you need to define the type always
//it is called union types
let testStringOrNumber: string | number

testStringOrNumber = 10
testStringOrNumber = "10"
// testStringOrNumber = [] note there is a warning here

// --------------------
//ARRAY 

let names = ["john", "jane", "tom"]
//names.push(3) note there is a warning because it is a number
names.push("Samson")

let number = [11,22,35]
// number.push(true) note it's gonna be error because it is not assigned to string but only a number
number.push(100)

//how to Define arrays types?
let testStringArrays : string[]
// testStringArrays = [1,2,3] note it's gonna be error because you are giving value as numbers not  strings
testStringArrays = ["Jl","Gela","Lhai"]

let testNumberArray : number[]
// testNumberArray = ["string","data"] note it's gonna be error because the variable is assigned only for number data type.
testNumberArray = [1,2,99,77]

//Union types for ARRAY
let testStringOrNumberArray: (string | number)[]
testStringOrNumberArray = [1,2,3]
testStringOrNumberArray = ["true","false","neutral"]
testStringOrNumberArray = ["true", 1, "false", 999]

// ---------
//OBJECTS
let user = {
    username: "john",
    age: 13,
    isAdmin: false,
}
//if you assigned new value there will be no error
user.username = "jane"
// user.username = 13 there is a warning sign
//but if you assign new value... let say a number there will be a error

// user.age = "me" note there will be an error
user.age = 22

// user.isAdmin = "true" note again there will be an error because it is not a boolean but string
user.isAdmin = false // it works 

//Typescript knew that there is no phone or property in your object array
//you need to add property as phone
// user.phone  = "+112252"

//OBJECTS types you need to define first

let userObj : {
    username: string,
    age: number,
    isAdmin: boolean,
}
//Note in defining and assigning object you need to add or complet all the properties because there will be a missing 
userObj = {
    username: "Samson",
    age: 30,
    isAdmin: true
}

//this symbol ? means is not required 
let userObj2 : {
    username: string,
    age: number,
    isAdmin: boolean,
    phone?: string,
}
//as you can see there is no warning because the phone has symbol ? like this and the typscript new that is not required
userObj2 = {
    username: "Samson",
    age: 30,
    isAdmin: false
    // but even you add the phone here
    // phone: "+12309999"
    // its gonna be work 
}

//ANY TYPE

let testAny : any;
// its gonna be any data type
testAny = 12
testAny = "12"
testAny = false
testAny = undefined
testAny = []
testAny = {}

// but not you need to be careful to assigning any value in ANY TYPE 
let testAnyArray  : any[];
testAnyArray = [1, "two", false, []];


// -----------
// FUNCTIONS
let sayHi = () =>{

}
//this function is always a funtion if you use it as variable its not gonna work
// sayHi = "Hi" there is a warning string is not assignable
// sayHi()

let funcReturnString = ():string=>{
    console.log("it must be strings only") //note is not gonna work but if return the string it works
    return "You should to return first and following value as string type"

}

//function that has an arguments
let multiple = (num :number)=>{
    return num*2;
}

let multiple2 = (num :number): number =>{
    return num*2;
}


let multiple3 = (num :number): void =>{
    // return num*2;
    //Do something but don't return
}

// ===
//note in arguments if you not using another variable just put ? so that typescript knows that it is not required
let sum = (num1:number , num2:number, another?:number )=>{
    return num1 + num2;
}
sum(5,1)//note there is no warning even another is not use


let func = (user:{username:string,age:number,phone?:string})=>{
    console.log(user.username)
}
// ===
//not is is ugly coding style there is another way to fix it

//Using this method
//TYPE ALIASES
type UserType = {
    username:string,
    age: number,
    phone?: string,
}
//now you can use this every where 
let betterFunction = (user:UserType) =>{
    console.log(user.username)
}

//let's create prototype function
type myFunc = (a:number, b:string) => void

let write : myFunc = (num , str)=>{
    console.log(num + " times " + str)
}

type UserType2 = {
    username:string,
    age: number,
    phone?: string,
    theme: "dark" | "light"
}

const userWithTheme : UserType2 = {
    username:"Samson",
    age: 30,
    theme: "light"
}

// -----------
// INTERFACES
//note be careful here you creating interface directly not having like this like above syntanx
interface IUser {
    username:string,
    email:string,
    age:number,
}

// using you can create different interfaces like client and users 

//Using Extend you can property in the interface IUser
interface IEmployee extends IUser{
   employeeId: number
}
//Let's use employeeId
const emp : IEmployee = {
    username: "Samson",
    email: "samson@gmail.com",
    age: 30,
    employeeId: 1,
}

const client : IUser = {
    username: "Samson",
    email: "samson@gmail.com",
    age: 30,
}

//GENERICS 
interface IAuthor{
    id:number,
    username:string,
}

interface ICategory{
    id:number,
    title:string,
}

interface IPost {
    id:number,
    title: string,
    desc: string,
    extra : IAuthor[] | ICategory[];
}


interface IPostBetter<T>{
    id:number,
    title: string,
    desc: string,
    extra: T[]
}

const testMe : IPostBetter<String> = {
    id:1,
    title: "NEXT.JS AND REACT.JS",
    desc: "Never stop learning these library and framwork!",
    extra: ["str1", "str2"]
}

interface IPostEvenBetter<T extends object>{
    id:number,
    title: string,
    desc: string,
    extra: T[]
}

const testMe2: IPostEvenBetter<IAuthor> ={
    id:1,
    title: "NEXT.JS AND REACT.JS",
    desc: "Never stop learning these library and framwork!",
    //You can add another interface here like IAuthor
    extra: [{id:1, username:'samson'}]
};

const testMe3: IPostEvenBetter<ICategory> ={
    id:1,
    title: "NEXT.JS AND REACT.JS",
    desc: "Never stop learning these library and framwork!",
    //You can add another interface here like IAuthor
    extra: [{id:1, title:'TypeScript'}]
};

// Note its all about typescript now use it in react and next.js


