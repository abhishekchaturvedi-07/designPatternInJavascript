// high level module doesnot depend upon low level module, both should depend upon abstraction
// abstraction should not depend upon detail, details should depend upon abstraction
// As software gets more complex, if we don’t follow this principle, then our code will break a lot.

class ClassA {
}
class ClassB {
}
class ClassC {
}
class Facade {
  constructor() {
    this.a = new ClassA();
    this.b = new ClassB();
    this.c = new ClassC();
  }
}
class Foo {
  constructor() {
    this.facade = new Facade();
  }
}

// We don’t have to worry about ClassA , ClassB and ClassC to implement the Foo class. As long as the Facade class doesn’t change, we don’t have to change our own code.