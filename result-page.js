//variable
const searchInput = document.getElementById('flight-search')
const flightForm = document.getElementById('flight-form')





//event listeners
flightForm.addEventListener('submit', function(event){
  event.preventDefault()

  //values
  const iataInputValue = document.getElementById('IATA-Code').value
  let newFlight = new Flight(iataInputValue)
  fetchDATA(newFlight)
  displayData(newFlight)
  
})
