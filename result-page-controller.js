class Flight{
  constructor(flightNumber, iata){
    this._number = flightNumber
    this._iata = iata
  }

  get flightnumber(){
    return this._number
  }

  get iata(){
    return this._iata
  }

  saveToLocalStorage(){
    localStorage.setItem('number',JSON.stringify(this._number))
  }

 getLocalStorage(){
  if(localStorage.getItem('number')){
    return JSON.parse(localStorage.getItem('number'))
  }else{
    []
  }
  

 }
  
}






const fetchDATA = async (newFlight) =>{
let flightNumber = newFlight.flightnumber
let iataCode = newFlight.iata
console.log(flightNumber)
console.log(iataCode)
let response = await fetch(`https://airlabs.co/api/v9/routes?airline_iata=${iataCode}&flight_number=${flightNumber}&api_key=183ae736-f269-4147-a31d-8b9bc99b29b3
`)
let result = await response.json()
console.log(result)
}