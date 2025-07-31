const person = {
    name: "Abdur Rahim",
    age: 35,
    isMarried: true, 
    hobbies: ["reading", "playing cricket"],

    working: function(){
        //console.log("ICT MINISTRY")
        document.writeln("ICT MINISTRY");
    }
};


//document.getElementById("demo1").innerHTML = person.name + " is " + person.age + " years old. Married: " + person.isMarried + ". Hobbies: " + person.hobbies.join(", ");

// let text = "";
// for (let x in person) {
//     text += person[x] + "<br>";
// }


// object convert to string in json format
// let text = JSON.stringify(person);


// object convert to array
// let text = Object.values(person);

// Object.entries() convert to array
// let text = "";

// for(let [key, value] of Object.entries(person)){
//     text += key + ": " + value + "<br>";
// }

// let text = "";
// document.getElementById("demo1").innerHTML = text;




// function printHello() {
//     const today = new Date();
//     document.getElementById("demo").innerHTML = today;
// }   


const cars = ["volvo", "BMW", "Ford", "Fiat", "Audi"];
// let text = "";      
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }

//console.log(text);
//console.log(typeof text);

document.getElementById("demo1").innerHTML = cars.length;