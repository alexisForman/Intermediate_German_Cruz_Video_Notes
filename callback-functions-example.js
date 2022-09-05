// A call back function is a function that is passed in as an argument in another function

function executeThreeTimes(callback)    {
    for(let i=0; i<3; i++){
        callback()
    }
}

function printFullName()    {
    console.log("John Doe")
}

executeThreeTimes(printFullName);

let people = ["John", "James", "Jimmy", "Jane"];
console.log(`There are ${people.length} people`.)

let people = {
    0: 'John',
    1: 'James',
    2: 'Jimmy',
    3: 'Jane',
    length: 4
    map: function(callback){
        let newArr = [];
        for(let i = 0; i<this.length; i++){
            newArr.push(callback(this[i]))
           
        }
            return newArr
    }
}

console.log(people[0])

let introductions = people.map((person)=>{
    return `My name is ${person}.`
})