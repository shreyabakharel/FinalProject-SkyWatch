//variable
const searchInput = document.getElementById('flight-search')
const flightForm = document.getElementById('flight-form')





//event listeners
flightForm.addEventListener('submit', function(event){
  event.preventDefault()

  //values
  const searchInputValue = document.getElementById('flight-search').value
  let newFlight = new Flight(searchInputValue)
  console.log(newFlight.number)
  fetchDATA(newFlight)
})
