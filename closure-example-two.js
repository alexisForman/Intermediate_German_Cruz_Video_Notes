// function superHero(name)    {
//     let powerLevel = Math.random()*100;
//     return function (catchPhrase)  {
//         console.log(`My name is ${name}. Power lever is ${powerLevel} and ${catchPhrase}`)
//     }
// }

// let toiletManCatchPhrase = superHero("Toilet Paper Man!");
// toiletManCatchPhrase("Im going to wipe the floor with you!");
// toiletManCatchPhrase("Did someone say flush!?!");

// let batmanCatchPhrase = superHero("Batman");
// batmanCatchPhrase("I am vengeance!");

// superHero("Batman")("I am venegeance");

// ------------------------------------------------------------------------------------
// Write a function sum that works like this: sum(a)(b) = a+b.  My attempts werent working after 15 minutes so I continued the Video.

function sum(a) {
    return function(b)  {
        console.log(a + b)
    }
}

sum(1)(2);
sum (5)(-4);