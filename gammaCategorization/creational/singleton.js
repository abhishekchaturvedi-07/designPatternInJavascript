// everyone hates singleton pattern? Gamma comments?
// call it once in the system / initialization only once / prevent everyone creating additional copy

class Singleton {
    constructor()
    { 
      const instance = this.constructor.instance;
      if (instance) {
        return instance;
      }
  
      this.constructor.instance = this;
    }
  
    test() {
      console.log('Test...')
    }
  }
  
  let s1 = new Singleton();
  let s2 = new Singleton();
  console.log('Are they identical? ' + (s1 === s2));
  s1.test();

 