const numberNight = () => {

    while (true){
        const numbers = prompt("Enter the amount number night:")

        if (!isNaN(numbers)){
            return numbers
        }else{
            alert("ERROR: Enter a number please.")
        }
    }
}
const destiny = () => {

    const citiesAvailables = ["barcelona","madrid","tokyo","oviedo"]
    const destiny = prompt("Enter your destiny please:");

    if (citiesAvailables.includes(destiny)){

        return destiny.toLowerCase()
    }else{
        return null
    }
}

const priceHotel = (nights) => {

    let priceForApartament = 140;
    return "The Hotel price is for " + nights + " night is: " +  nights * priceForApartament;
    
}

const costeAvion = (nights, cityName) => {

    const descount = 0.9;

    if(cityName != null){

        if (nights >= 3){

            if(cityName === "oviedo"){
                return "You have discount of ", 15 * descount + " euros"
            }else if(cityName === "tokyo"){
                return "You have discount of " + 700 * descount + " euros"
            }else if(cityName === "madrid"){
                return "You have discount of ", 90 * descount + " euros"
            }else if(cityName === "barcelona"){
                return "You have discount of ", 90 * descount + " euros"
            }
        }else{

            switch(cityName){
                case ("oviedo"): return "You haven't descount. The price to the airplane is: " + 15 + " euros"
                case ("tokyo"): return "You haven't descount. The price to the airplane is: " + 700 + " euros"
                case ("madrid"): return "You haven't descount. The price to the airplane is: " + 90 + " euros"
                case ("barcelona"): return "You haven't descount. The price to the airplane is: " + 90 + " euros"
                default: return "ERRORR"
                }
            }
    }else{
        return "This city isin't available."
    }
}

const costeAlquilerCoche = (nights) => {

    const priceOneDay = 40;
    const priceFewDays = nights * priceOneDay

    if (nights >= 3 && nights <= 7){

        return "You have the descount of 20 euros for get the car for 3 days o more. The price is " + (priceFewDays - 20)

    }else if(nights > 7){

        return "You have the descount of 50 euros for get the car for 8 days o more. The price is " + (priceFewDays - 50)
    }else{
        return "You dont have descount for the car. The price is: " + nights * priceOneDay
    }

}

const nights = numberNight();
const cityName = destiny();

window.alert(priceHotel(nights))
window.alert(costeAvion(nights, cityName))
window.alert(costeAlquilerCoche(nights))








