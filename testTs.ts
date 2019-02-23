class TestClass{
    constructor(public name: string, private age: number){}

    printName(){
        console.log(this.name);
    }

    printAge(){
        console.log(this.age);
    }
}

const testClass = new TestClass("Nikolai", 23)
