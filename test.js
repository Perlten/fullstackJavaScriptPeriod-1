// differences between java and javascript is for one that i cant make abstract methods
class Human {
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }

    printName(){
        console.log(this.name);
    }
    
    printAge(){
        console.log(this.age);
    }

    printStory(){

    }
}

class basketballPlayer extends Human{
    constructor(name, age, height) {
        super(name, age)
        this.height = height
    }

    printStory(){
        console.log(`I am a ${this.height} tall basketball player`);
    }
}

const bBaller = new basketballPlayer("Perlt", 23, "190")
bBaller.printStory()
bBaller.printAge()