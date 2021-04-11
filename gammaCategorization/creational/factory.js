// this is a component who is responsible solely for the wholesale (not piecewise like builders) creation of object
// FM is also static method that create object
// single responsibiloty principle / concern of seperation
// client will call/create factory and doestn concern about what is happening inside but get the perfect desired output
//doent expose the creational logic to the client and refered the created object 
// also known as virtual constructor

function Developer(name){
    this.name = name
    this.type = 'Developer'
}
function Tester(name){
    this.name = name
    this.type = 'Tester'
}
function FactoryCommunity(){
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name)
                break;
            case 2:
                return new Tester(name)
                break;
            default:
                break;
        }
    }
}

let community = new FactoryCommunity()
console.log(community)

associateList = []
associateList.push(community.create('Abhishek', 1))
associateList.push(community.create('Abhi', 2))
associateList.push(community.create('Rocky', 1))
associateList.push(community.create('sonu', 2))
console.log(associateList)

for(asc of associateList){
    console.log("Hi, I am ",asc.name, " and I am a ", asc.type)
}

// Another example

CoordinateSystem = {
    CARTESIAN : 0,
    POLAR : 1
  };
  
  class Point
  {
    constructor(x, y)
    {
      this.x = x;
      this.y = y;
    }
  
    // constructor(a, b, cs=CoordinateSystem.CARTESIAN)
    // {
    //   switch (cs)
    //   {
    //     case CoordinateSystem.CARTESIAN:
    //       this.x = a;
    //       this.y = b;
    //       break;
    //     case CoordinateSystem.POLAR:
    //       this.x = a * Math.cos(b);
    //       this.y = a * Math.sin(b);
    //       break;
    //   }
    //
    //   // steps to add a new system
    //   // 1. augment CoordinateSystem
    //   // 2. change ctor
    // }
  
    static newCartesianPoint(x, y)
    {
      return new Point(x, y);
    }
  
    static newPolarPoint(rho, theta)
    {
      return new Point(rho*Math.cos(theta), rho*Math.sin(theta));
    }
  
    static get factory()
    {
      return new PointFactory();
    }
  }
  
  class PointFactory
  {
    // not necessarily static
    newCartesianPoint(x, y)
    {
      return new Point(x, y);
    }
  
    static newPolarPoint(rho, theta)
    {
      return new Point(rho*Math.cos(theta), rho*Math.sin(theta));
    }
  }
  
  let p1 = new Point(2, 3, CoordinateSystem.CARTESIAN);
  console.log(p1);
  // Point → PointFactory
  let p2 = PointFactory.newPolarPoint(5, Math.PI/2);
  console.log(p2);
  
  // this line will not work if newCartesianPoint is static!
  let p3 = Point.factory.newCartesianPoint(2, 3);
  console.log(p3);


  // example 
  const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const async = require('async');

class HotDrink
{
  consume() {}
}

class Tea extends HotDrink
{
  consume() {
    console.log('This tea is nice with lemon!');
  }
}

class Coffee extends HotDrink
{
  consume()
  {
    console.log(`This coffee is delicious!`);
  }
}

class HotDrinkFactory
{
  prepare(amount) { /* abstract */ }
}

class TeaFactory extends HotDrinkFactory
{
  prepare(amount) {
    console.log(`Grind some beans, boil water, pour ${amount}ml`);
    return new Coffee();
  }
}

class CoffeeFactory extends HotDrinkFactory
{
  prepare(amount) {
    console.log(`Put in tea bag, boil water, pour ${amount}ml`);
    return new Tea();
  }
}

let AvailableDrink = Object.freeze({
  coffee: CoffeeFactory,
  tea: TeaFactory
});

class HotDrinkMachine
{
  constructor()
  {
    this.factories = {};
    for (let drink in AvailableDrink)
    {
      this.factories[drink] = new AvailableDrink[drink]();
    }
  }

  makeDrink(type)
  {
    switch (type)
    {
      case 'tea':
        return new TeaFactory().prepare(200);
      case 'coffee':
        return new CoffeeFactory().prepare(50);
      default:
        throw new Error(`Don't know how to make ${type}`);
    }
  }

  interact(consumer)
  {
    rl.question('Please specify drink and amount ' +
      '(e.g., tea 50): ', answer => {
      let parts = answer.split(' ');
      let name = parts[0];
      let amount = parseInt(parts[1]);
      let d = this.factories[name].prepare(amount);
      rl.close();
      consumer(d);
    });
  }
}

let machine = new HotDrinkMachine();
// rl.question('which drink? ', function(answer)
// {
//   let drink = machine.makeDrink(answer);
//   drink.consume();
//
//   rl.close();
// });
machine.interact(
  function (drink) {
    drink.consume();
  }
);



// question :   You are given a class called Person . The person has two fields: id , and name .Please implement a  PersonFactory that has a non-static  createPerson()  method that takes a person's name and returns a person initialized with this name and an id.The id of the person should be set as a 0-based index of the object any instance of PersonFactory has created. So, the first person any factory makes should have Id=0, second Id=1 and so on.
class Person
{
  constructor(id, name)
  {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory
{
  createPerson(name)
  {
    return new Person(
      PersonFactory.id++,
      name
    );
  }
}
PersonFactory.id = 0;

