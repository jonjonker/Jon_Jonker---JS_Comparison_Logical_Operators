const age = 19;
const isFemale = true;
const driverStatus = 'Nobob';
const name = "Felix";
const totalAmount = 99;


if (age >= 17) {
    console.log("please come in, have a wonderful time!");
} else {
    console.log("Stay home, you are too young to enter");
}

if (isFemale) {
    console.log("Yes, its ladiesnight again! Have a wonderful time");
} else {
    console.log("Sorry dude, ladies only");
}

if (driverStatus === "bob") {
    console.log("Whoohoo, you can safely drive you and your friends home");
} else {
    console.log("Nope, you are too drunk to drive");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting op bier!");
}

if (name == "Sarah" || name == "bram") {
    console.log("Yes! Je komt in aamerking voor een gratis biertje");
}

if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Yes! Je krijgt een gratis portie (vega) bitterballen");
} if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Yes! Je krijgt een gratis portie nacho's");
} if (totalAmount >= 100) {
    console.log("Yes! Free champagne it is!")
}

