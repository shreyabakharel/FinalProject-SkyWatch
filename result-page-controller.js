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
let response = await fetch(`https://airlabs.co/api/v9/flight?flight_iata=${iataCode}&api_key=183ae736-f269-4147-a31d-8b9bc99b29b3
`)
let result = await response.json()
return result
}

const displayData = async(newFlight) =>{
  let flightInfo = document.getElementById('flight-info')
  let data = await fetchDATA(newFlight)
  console.log(data)
  let div = document.createElement('div'
  )
  div.innerHTML = `<div class="card mt-3" style="width: 18rem;" >
  <div class="card-body">
    <h5 class="card-title">${data.response.flight_iata}</h5>
    <p class="card-text">Flight from ${data.response.dep_city} to ${data.response.arr_city}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Depart Time: ${data.response.dep_time}</li>
    <li class="list-group-item">Estimated Arrival: ${data.response.arr_estimated}</li>
    <li class="list-group-item">Arrival Airport: ${data.response.arr_iata} at gate ${data.response.arr_gate}</li>
  </ul>
</div>`

flightInfo.append(div)

}



