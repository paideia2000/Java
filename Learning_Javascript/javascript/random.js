
const secretNumber = () => {


    let contador = 3
    while (contador >= 0){

        const number= Math.floor(Math.random() * ( (2 - 1 + 1) + 1))
    
        const userNumber = prompt("Enter a number please");

        if (!isNaN(userNumber)){

            if (number === parseInt(userNumber)){
                return "True"
                
            }else{
                contador--;
                window.alert("You have " + contador + " try more.")
            }
        }
    }

}

window.alert(secretNumber())






