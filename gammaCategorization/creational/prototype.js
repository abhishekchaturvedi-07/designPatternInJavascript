// A prototype is a partially or fully initialized object that we can copy and utilize/ make use of  it 
//deep copy the protype 

// Explicit Copy
class Address
{
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  deepCopy()
  {
    return new Address(
      this.streetAddress,
      this.city,
      this.country
    );
  }

  toString()
  {
    return `Address: ${this.streetAddress}, ` +
      `${this.city}, ${this.country}`;
  }
}

class Person
{
  constructor(name, address)
  {
    this.name = name;
    this.address = address; //!
  }

  deepCopy()
  {
    return new Person(
      this.name,
      this.address.deepCopy() // needs to be recursive
    );
  }

  toString()
  {
    return `${this.name} lives at ${this.address}`;
  }
}

let john = new Person('Abhishek',
  new Address('1 Sundar Nagar', 'Raipur', 'CG'));

let jane = john.deepCopy();

jane.name = 'Tutu';
jane.address.streetAddress = '2 Sundar Nagar'; // oops

console.log(john.toString()); // oops, john is called 'jane'
console.log(jane.toString());



// Exccercise

class Point
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }
}

class Line
{
  constructor(start, end)
  {
    this.start = start;
    this.end = end;
  }

  deepCopy()
  {
    let newStart = new Point(this.start.x, this.start.y);
    let newEnd = new Point(this.end.x, this.end.y);
    return new Line(newStart, newEnd);
  }
}
