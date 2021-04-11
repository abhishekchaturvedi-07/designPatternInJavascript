// if you have a function which is takes a base class as parameter, it should take the derived class and give the outout without break any funcgtionality anywhere whatsoever 

class Rectangle{
    constructor(width, height)
    {
        this._width = width
        this._height = height
    }
    get width(){ return this._width}
    get height(){ return this._height}
    set width(value){this._width = value}
    set height(value){this._height = value}
    get area()
    {
        // console.log('this._width * this._height- ', this._width * this._height)
        return this._width * this._height
    }

    // Liskov Substition 
    get isSquare()
    {
        return this._width === this._height
    }
    toString()
    {
        return `${this._width} * ${this._height}`
    }
}

class Square extends Rectangle
{
    constructor(size)
    {
        super(size, size)
    }
    set width(value){this._height = this._width = value}
    set height(value){this._height = this._width = value}
}

// in some case base class work fine but derived class create issues check with the example below
let useIt = function(rc)
{
    let width = rc._width;
    rc.height = 10;
    console.log(`sdsd- ${rc.area}`)
    console.log(
        `Expected area of ${10*width}, `, 
        `got ${rc.area}`
    )
}
let rc = new Rectangle(2,3)
// console.log(rc.toString())
useIt(rc)

let sq = new Square(5)
sq.width = 7
// console.log(sq.toString())
useIt(sq)


// get rid of derived class 
// we can introduce special case in line 20 (get isSquare()), and get rid of derived class