// open for extension, closed for modification
// never ever jump to any class directly to modify it, unless there will be any bug in there
// extending functionality is such not a good thing, because some other people might have caclling the same class and modifying it. Not the best idea. In some case its fine . Not a good practive b/c it affects scalibility and maintainbility of the code.
// better approach is use inheritance / use specifications and combinators / seperation of concerns and use combinators and then feed them in some filter which process it in a better way

//defining enumerations but as js dont have enum we can define like below objects

let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
});

class Product{
    constructor(name, color, size){
        this.name = name
        this.color = color
        this.size = size
    }
}

// class ProductFilter
// {
//     filterByColor(products, color){
//         return products.filter(product => product.color === color )
//     }
//     filterBySize(products, size){
//         return products.filter(product => c)
//     }
//     filterBySizeAndColor(products, size, color){
//         return products.filter(product => product.size === size  && product.color === color)
//     }

//     //CAnt use this approach as it will lead to state space explosion {because might be multiple occurances/combinations to use the combination}
// }

//SPECIFICATION / SEPECRATION OF CONCERN / Untied every speciications 

class ColorSpecification
{
    constructor(color){
        this.color=color;
    }
    //write the condition here
    isSatisfied(item)
    {
        return item.color === this.color;
    }
}
class SizeSpecification
{
    constructor(size){
        this.size=size;
    }
    //write the condition here
    isSatisfied(item)
    {
        return item.size === this.size ;
    }
}

//Filter

class BetterFilter
{
    filter(items, spec)
    {
        return items.filter(item => spec.isSatisfied(item))
    }
}

// Combinator - A specification which combine multiple specification

class AndSpecification
{
    constructor(...specs)
    {
        this.specs = specs
    }
    isSatisfied(item)
    {
        return this.specs.every(x => x.isSatisfied(item))
    }
}



let apple = new Product('Apple', Color.red, Size.medium)
let tree = new Product('Tree', Color.green, Size.large)
let book = new Product('Book', Color.blue, Size.small)
let house = new Product('House', Color.blue, Size.large)

let products = [apple, tree, book, house]

// let pf = new ProductFilter()
// console.log('Old Method Products Blue:--')
// for(let p of pf.filterByColor(products, Color.blue)){
// console.log(`${p.name} is ${Color.blue}`)
// }
// for( let p of pf.filterBySizeAndColor(products, Size.large, Color.green )){
//     console.log(`Example of Combinator: \n ${p.name} is ${Size.large} and the color is ${Color.green}`)
// }



//Calling BetterFilter

let bf = new BetterFilter();
console.log('filter products with spcification method');
for(let p of bf.filter(products, new ColorSpecification(Color.blue)))
{
    console.log(`${p.name} is ${Color.blue}`)
}

// Combinator calling

let comb = new AndSpecification(
    new ColorSpecification(Color.blue), 
    new SizeSpecification(Size.large) 
)

for(let p of bf.filter(products, comb)){
    console.log(`${p.name} is large and blue`)
}