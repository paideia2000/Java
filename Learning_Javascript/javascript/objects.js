// const newArraydatas = (dataMyDog) => {

    
//     console.log(Object.keys(dataMyDog));
//     console.log(Object.values(dataMyDog));
//     console.log(Object.entries(dataMyDog));
    
    
    
// }

// const dataMyDog = {"name":"Mia", "foots":4, "friends": "Bocoy"}

// newArraydatas(dataMyDog)

// const testObj = {
//     "ojos": 2,
//     "nombre": "Pablo",
//     "piernas": 2
// };

// const amountEyes = testObj["ojos"]
// const name = testObj["nombre"]
// const legs = testObj["piernas"]


// console.log(amountEyes, name, legs);


// const cities = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };

// const number = 19;
// const valueNumber = cities[number];

// console.log(valueNumber);



// function phoneticLookup(val) {
//     let result = "";

//     let lookup = {};

//     // Sólo cambia el código por debajo de esta línea
//     switch (val) {
//         case "alpha":
//             result = "Adams";
//             lookup[val] = result;
//             break;
//         case "bravo":
//             result = "Boston";
//             break;
//         case "charlie":
//             result = "Chicago";
//             break;
//         case "delta":
//             result = "Denver";
//             break;
//         case "echo":
//             result = "Easy";
//             break;
//         case "foxtrot":
//             result = "Frank";
//     }

//     return lookup;
// }

// console.log(phoneticLookup("alpha"));



// const myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };

// const gloveBoxContents = myStorage["car"]["inside"]["glove box"]; // Cambia esta línea
// console.log(gloveBoxContents); // Debería valer: "maps"


// const myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];

// const secondTree = myPlants[1]["list"];
// console.log(secondTree); // Debería mostrar: ["fir", "pine", "birch"]




// // function find for OBJECT

// const users = [
// 	{
// 		"name" : "Paco",
// 		"isActive" : false,
// 		"age": 18
// 	},
// 	{
// 		"name" : "Laura",
// 		"isActive" : false,
// 		"age": 21
// 	},
// 	{
// 		"name" : "Raquel",
// 		"isActive" : false,
// 		"age": 15
// 	},
// 	{
// 		"name" : "Juan",
// 		"isActive" : true,
// 		"age": 17
// 	},
// 	{
// 		"name" : "Alberto",
// 		"isActive" : false,
// 		"age": 50
// 	},
// 	{
// 		"name" : "Rodolfo",
// 		"isActive" : true,
// 		"age":7
// 	},
// ];

// const getUser =  users.find( newObject => newObject["age"] === 50); // Modifica esta línea para resolver el ejercicio

// console.log(getUser["name"] + " is " + getUser["isActive"]); // Debería mostrar: 17

// console.log(typeof getUser);


// const activeUser = users.filter( users => users["isActive"] === true);

// console.log(activeUser);

// const greatThan18 = users.filter( age => age["age"] > 18 )

// console.log(greatThan18);

// const array = [1,2,3];

// const avg = array.reduce( (acc , number) => acc + number ) / array.length

// console.log(avg);


// const getNameWomans = (result) => {


//     console.log(result.filter(players => players["gender"] === "female").map( name => name["name"]));
    
    
// }

// const getSmallerPeople = (players) => {


//     const allPLyares = players["results"];
    

//     console.log(allPLyares.map( players => ({...allPLyares, newHeight: players["height"] - 10})));
    

// }

// const sumweight = (data) => {

//     const result = data["results"]

//     const totalWeight = result.reduce( (acc, weight) => acc + Number(weight["mass"]), 0)

//     console.log(totalWeight);
    

// }

// const heightAvg = (data) => {

//     const result = data["results"];

//     const avg = result.reduce( (acc, height) => acc + parseInt(height["height"]), 0) / result.length

//     console.log(avg);
    

// }


// const getNamePlayer = (name,data) => {

//     const idolData = [];

//     const result = data["results"];

//     idolData.push(result.find( name => name["name"] === "Luke Skywalker"))

//     console.log(idolData);
    

// }


// const removeplayer = (name, data) => {

//     const result = data["results"]

//     const newResult = result.filter( user => user["name"] !==  name);

//     console.log(newResult);
    

// }


// const filmsEndpoint = (name, result) => {

//     console.log(result.filter( user => user["name"] === name).map( film => film["films"] ));
    
// }

const allNames = (result) => {

    
    const names = [result.map( players => players["name"])]

    console.log(names);
    

}


const getData = async () => {

    const response = await fetch('https://swapi.py4e.com/api/people');
    const data = await response.json()
    const result = data["results"]
    

    // getNameWomans(result);

    // getSmallerPeople(data);

    // sumweight(data);

    // heightAvg(data);

    // getNamePlayer("Luke Skywalker",data)

    // removeplayer("Luke Skywalker", data)

    // filmsEndpoint("Luke Skywalker", result)

    allNames(result)    

}


getData()
