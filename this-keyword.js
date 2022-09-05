this exists within a function and outside of a function it just calls the whole window, 
so its meaningless. 

let person =    {
    name: "John",
    age: 45
    printName: function()   {
        console.log(this.name)
    }
}

person.printName()

let student =   {
    name: 'Jane'
}

function printName()    {
    console.log(this.name)
}

printName();

printName.call(student)