//variable
const searchInput = document.getElementById('flight-search')
const flightForm = document.getElementById('flight-form')





//event listeners
flightForm.addEventListener('submit', function(event){
  event.preventDefault()

  //values
  const flightNumberInputValue = document.getElementById('flight-search').value
  const iataInputValue = document.getElementById('IATA-Code').value
  console.log(iataInputValue)
  let newFlight = new Flight(flightNumberInputValue, iataInputValue)
  console.log(newFlight.number)
  fetchDATA(newFlight)
  
})
