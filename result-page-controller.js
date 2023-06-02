class Flight{
  constructor(iata){
    this._iata = iata
  }



  get iata(){
    return this._iata
  }

  saveToLocalStorage(){
    localStorage.setItem('iata',JSON.stringify(this._iata))
  }

 getLocalStorage(){
  if(localStorage.getItem('iata')){
    return JSON.parse(localStorage.getItem('iata'))
  }else{
    []
  }
  

 }
  
}






const fetchDATA = async (newFlight) =>{
let iataCode = newFlight.iata
console.log(iataCode)
let response = await fetch(`https://airlabs.co/api/v9/flight?flight_iata=${iataCode}&api_key=183ae736-f269-4147-a31d-8b9bc99b29b3
`)
let result = await response.json()
console.log(result)
}