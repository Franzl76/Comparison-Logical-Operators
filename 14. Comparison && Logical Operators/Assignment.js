//Part 1: 50% korting voor jongeren tussen 18 en 25 jaar
let myAge = 22;

if (myAge >= 18 && myAge <= 25){

    console.log("You get 50% off")
}

//Part 2: Fun action!
let myName = Bram;

if (myName == Bram || myName == Sarah){

    console.log("You get a free beer")
}

//Part 3: Anniversary Discount
//If bill > 25  euro then You get free veggies
//If bill > 50  euro then You get free portion of nachos
//If bill > 100 euro You get free bottle of champagne
const totalAmount = 150;

if (totalAmount >= 25 && totalAmount <=50){

    console.log("You get free veggies")

}

if (totalAmount >= 50 && totalAmount <=100){

    console.log("You get free portion of nachos")

}

if (totalAmount >= 100){

    console.log("You get a free bottle of champagne")

}