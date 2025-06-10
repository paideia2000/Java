const ask = () => confirm("Do you want to use the calculator")

const calculadora = () => {

    if (ask()){
        const number_1 = prompt("Enter the first number")
        const simbolo = prompt("Enter the operacion")
        const number_2 = prompt("Enter the second number")

    let result = "";

    if (!(isNaN(number_1) && isNaN(number_2))){

    switch (simbolo){
        case ("*"): result += parseInt(number_1) * parseInt(number_2); break;
        case ("+"): result += parseInt(number_1) + parseInt(number_2); break;
        case ("-"): result += parseInt(number_1) - parseInt(number_2); break;
        case ("/"): result += parseInt(number_1) / parseInt(number_2); break;
        default: result += "ERROR IN THE OPERATOR"; break;
        
            }

            return  result
        }
    }
}

window.alert(calculadora())
