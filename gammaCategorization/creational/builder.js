// https://www.youtube.com/watch?v=M7Xi1yO_s8E

// Bad Way
class User{
    constructor(name, age, phone, adress){
        this.name = name
        this.age = age
        this.phone = phone
        this.adress = adress
    }
}

class Address{
    constructor(pincode, area){
        this.pincode = pincode
        this.area = area
    }
}

const newAssociate = new User('Abhishek', undefined, undefined, new Address('492001', 'Sundar Nagar'))
console.log(newAssociate)

//OUTPUT:
// User {
//     name: 'Abhishek',
//     age: undefined,
//     phone: undefined,
//     adress: Address { pincode: '492001', area: 'Sundar Nagar' }
//   }
// What if we have large application with n number of parameters, then the above writing code standard is bad, so we can introduce BUILDER class here 


// Good Way by using BUILDER
class User2{
    constructor(name){
        this.name = name
    }
}

class Address2{
    constructor(pincode, area){
        this.pincode = pincode
        this.area = area
    }
}

class UserBuilder{
    constructor(name){
        this.user = new User2(name)
    }

    setAge(age){
        this.user.age = age
        return this
    }
    setPhone(phone){
        this.user.phone = phone
        return this
    }
    setAddress(address){
        this.user.address = address
        return this
    }
    build(){
        return this.user
    }
}

const associate2 = new UserBuilder('Abhishek').build()
// console.log(associate2)

// Output :
// User2 { name: 'Abhishek' }

const associate3 = new UserBuilder('Tutu').setAge('10').setPhone('9999999999').build()
console.log(associate3)

// User2 { name: 'Tutu', age: '10', phone: '9999999999' }

// ************************************************************************************************


// NOTE

// If we have small object we can write the optional parameter in a much cleaner way: 


class User3{
    constructor(name, {age, phone = '3232', adress} = {}){
        this.name = name
        this.age = age
        this.phone = phone
        this.adress = adress
    }
}

class Address3{
    constructor(pincode, area){
        this.pincode = pincode
        this.area = area
    }
}

let associate4 = new User3('Rocky', {age: 10})
let associate5 = new User3('Sonu', {age: 10, phone: 8998989})
console.log(associate4)
console.log(associate5)


// With More Example 

class Person{
    constructor(){
        this.name = '';
        this.age= ''

    }
    toString()
      {
        return `Person name is ${this.name} and age is ${this.age}`
      }
}
class CodeBuilder
{
  constructor(person = new Person())
  {
    this.person = person
  }

  addName(name)
  {
    this.person.name = name
    console.log(this.person.name)
     return this
  }
  addAge(age)
  {
    this.person.age = age
    console.log(this.person.age)
    return this
  } 
  build(){
      return this.person
  }
}

let personInfo1 = new CodeBuilder().addName('Abhishek').addAge('10').build()
console.log(personInfo1.toString())
