//Handling single responsiblity in single class / Seperation of Concerns
// Opposit of God Object(lots of responsinlitiy in sinlge class)

class Journal 
{
    
    constructor() {
        console.log('entered clas Journal');
        this.entries = {};
        console.log('entries array : ', this.entries)
    }

    addEntry(text){
        let c = ++Journal.count;
        let entry = `${c}: ${text}`
        console.log('value of entry: ',entry)
        this.entries[c] = entry;
        console.log('updated entries array : ',this.entries)
        return c
    }

    removeEntry(index){
        delete this.entries[index]
    }

    toString(){
        return Object.values(this.entries).join('\n')
    }
}

Journal.count = 0;

const j = new Journal;
j.addEntry('Hello Abhishek');
j.addEntry('Whats up buddy!');
console.log(j.toString())