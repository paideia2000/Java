

const priceHotel = (numberNights) => {


        const costHotel = numberNights * 140;

        return costHotel

} 

const airplanePrice = (numberNights, destination) => {

        if (destination === "oviedo"){
            if (numberNights >= 3){

                const priceTravel = 15 * 0.9
                return priceTravel

            }else{
                return 15
            }

        }else if(destination === "madrid"){
            if (numberNights >= 3){

                const priceTravel = 90 * 0.9
                return priceTravel

            }else{
                return 90
            }
        }else if(destination === "barcelona"){
            if (numberNights >= 3){

                const priceTravel = 90 * 0.9
                return priceTravel

            }else{
                return 90
            }
        }else{
            if (numberNights >= 3){

                const priceTravel = 700 * 0.9
                return priceTravel

            }else{
                return 700
            }
        }
}

const priceRentCar = (numberNights) => {

    const totalprice = numberNights * 40;

    if (numberNights >=3 && numberNights <= 7){

        return totalprice - 20;

    }else if(numberNights > 7){

        return totalprice - 50;

    }else{

        return totalprice
    }


}

const showData = () => {

    // datauser
    const numberNights = document.querySelector("#number").value;
    const destination = document.querySelector("#cities").value


    // function process datauser

    if (/^[0-9]+$/.test(numberNights)){

        const hotelPrice = priceHotel(numberNights);
        const priceCar = priceRentCar(numberNights);
        const priceAirplane = airplanePrice(numberNights, destination);
        const totalPrice = hotelPrice + priceCar + priceAirplane

        document.querySelector("#show_hotel_price").value = hotelPrice;
        document.querySelector("#show_price_car").value = priceCar;
        document.querySelector("#show_price_travel").value = priceAirplane;
        document.querySelector("#show_total_price").value = totalPrice

    }else{

        alert("You must insert a number please")

    }


}

document.querySelector("#button").addEventListener("click", showData)