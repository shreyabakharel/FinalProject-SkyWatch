class Flight {
  constructor(iata) {
    this._iata = iata;
  }

  get iata() {
    return this._iata;
  }

  saveToLocalStorage() {
    localStorage.setItem("iata", JSON.stringify(this._iata));
  }

  getLocalStorage() {
    if (localStorage.getItem("iata")) {
      return JSON.parse(localStorage.getItem("iata"));
    } else {
      return [];
    }
  }
}

const fetchDATA = async (newFlight) => {
  let iataCode = newFlight.iata;

  let response = await fetch(
    `https://airlabs.co/api/v9/flight?flight_iata=${iataCode}&api_key=183ae736-f269-4147-a31d-8b9bc99b29b3`
  );
  let result = await response.json();
  console.log(result);
  // Update arrival information
  const arrivalInfoElement = document.querySelector("#arrival-info");
  arrivalInfoElement.innerHTML = `
    <li class="list-group-item">City: ${result.response.arr_city}</li>
    <li class="list-group-item">Country: ${result.response.arr_country}</li>
    <li class="list-group-item">Airport: ${result.response.arr_name} (${result.response.arr_iata})</li>
    <li class="list-group-item">Scheduled Time: ${result.response.arr_time}</li>
    <li class="list-group-item">Estimated Time: ${result.response.arr_estimated}</li>
  `;

  // Update departure information
  const departureInfoElement = document.querySelector("#departure-info");
  departureInfoElement.innerHTML = `
    <li class="list-group-item">City: ${result.response.dep_city}</li>
    <li class="list-group-item">Country: ${result.response.dep_country}</li>
    <li class="list-group-item">Airport: ${result.response.dep_name} (${result.response.dep_iata})</li>
    <li class="list-group-item">Scheduled Time: ${result.response.dep_time}</li>
    <li class="list-group-item">Estimated Time: ${result.response.dep_estimated}</li>
  `;
};

// Retrieve the flight number from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const flightNumber = urlParams.get("iataCode");

if (flightNumber) {
  let newFlight = new Flight(flightNumber);
  fetchDATA(newFlight);
}
