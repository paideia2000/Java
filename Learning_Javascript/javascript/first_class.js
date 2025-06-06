// const tryMethod = (phrase) => {

//     console.log("Test the substring: " + phrase.substring(0,4));
//     console.log("Test of the slicing: " + phrase.slice());
//     console.log("The phrase have " + phrase.length + " letters");
//     console.log(phrase.toUpperCase());
//     console.log(phrase.toLowerCase());
//     console.log(phrase.lastIndexOf("e"));
//     console.log(phrase.indexOf("o"));
//     console.log(phrase.includes("R"));
//     console.log(phrase.charAt("R"));
    
// }
// tryMethod("Rene el duro")

const letterAmount = (text_1, text_2, text_3) => {
    
    if ( text_1.length < 5 || text_2.length < 5 || text_3.length < 5){
        return console.error("ERROR: Any string dont have five characteres");
        
    }else{
        console.log(text_1.slice(0,3) + text_2.slice(0,3) + text_3.slice(0,3));
    }
}


letterAmount("anamaria", "raulrene", "golfoman");


const checkLetter = (text_1, letter) => {

    if (text_1.charAt(0) !== letter){

        return "The first letter of the text_1 is not equal to letter."
        
    }else{

        return "Is equal."
    }

}

console.log( checkLetter("new phrase", "n"));
