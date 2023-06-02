// const flightNumberInput = document.getElementById("flight-number");
// const submitButton = document.getElementById("submit");
// const flightInfoContainer = document.getElementById("flight-info");

// const fetchFlightInfo = async function () {
//   try {
//     const response = await fetch(
//       `https://api.aviationstack.com/v1/flights?access_key=6590386e093c569c9f6b8cd928b15245`
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Error fetching flight information:", error);
//     throw error;
//   }
// };

// const displayFlightInfo = async function (flight) {
//   try {
//     let data = await fetchFlightInfo(flight);

//     if (data.pagination.total > 0) {
//       const flightInfo = `
//         <p>Flight Number: ${data.data[0].flight.iata}</p>
//         <p>Departure: ${data.data[0].departure.airport}</p>
//         <p>Arrival: ${data.data[0].arrival.airport}</p>
//       `;

//       flightInfoContainer.innerHTML = flightInfo;
//     } else {
//       flightInfoContainer.textContent = "Flight not found.";
//     } 
//     console.log(data)
//   } catch (error) {
//     flightInfoContainer.textContent =
//       "An error occurred. Please try again later.";
//   }
// };

// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   const flightNumber = flightNumberInput.value.trim();

//   if (!flightNumber) {
//     flightInfoContainer.textContent = "Please enter a flight number.";
//     return;
//   }

//   displayFlightInfo(flightNumber);
// });





// const flightNumberInput = document.getElementById("flight-number");
// const submitButton = document.getElementById("submit");
// const flightInfoContainer = document.getElementById("flight-info");

// const fetchFlightInfo = async function () {
//   try {
//     const response = await fetch(
//       `https://api.aviationstack.com/v1/flights?access_key=6590386e093c569c9f6b8cd928b15245`
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Error fetching flight information:", error);
//     throw error;
//   }
// };

// const displayFlightInfo = async function (flight) {
//   try {
//     let data = await fetchFlightInfo(flight);

//     if (data.status === "success") {
//       const flightInfo = `
//         <p>Flight Number: ${data.data.flight.number}</p>
//         <p>Departure: ${data.data.departure.airport}</p>
//         <p>Arrival: ${data.data.arrival.airport}</p>
//       `;

//       flightInfoContainer.innerHTML = flightInfo;
//     } else {
//       flightInfoContainer.textContent = "Flight not found.";
//     } 
//     console.log(data)
//   } catch (error) {
//     flightInfoContainer.textContent =
//       "An error occurred. Please try again later.";
//   }
 
// };

// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   const flightNumber = flightNumberInput.value.trim();

//   if (!flightNumber) {
//     flightInfoContainer.textContent = "Please enter a flight number.";
//     return;
//   }

//   displayFlightInfo(flightNumber);
// });






// const flightNumberInput = document.getElementById("flight-number");
// const submitButton = document.getElementById("submit");
// const flightInfoContainer = document.getElementById("flight-info");

// const fetchFlightInfo = async function (flight) {
//   try {
//     const response = await fetch(
//       `https://airlabs.co/api/v9/flight?flight_iata=${flight}&api_key=0a974ba6-ad84-4bc3-a877-51ea78b8798d`
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Error fetching flight information:", error);
//     throw error;
//   }
// };

// const displayFlightInfo = async function (flight) {
//   try {
//     let data = await fetchFlightInfo(flight);

//     if (data.status === "success") {
//       const flightInfo = `
//         <p>Flight Number: ${data.flight_number}</p>
//         <p>Departure: ${data.dep_iata}</p>
//         <p>Arrival: ${data.arr_terminal}</p>
//       `;

//       flightInfoContainer.innerHTML = flightInfo;
//     } else {
//       flightInfoContainer.textContent = "Flight not found.";
//     } 
//     console.log(data)
//   } catch (error) {
//     flightInfoContainer.textContent =
//       "An error occurred. Please try again later.";
//   }
 
// };

// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   const flightNumber = flightNumberInput.value.trim();

//   if (!flightNumber) {
//     flightInfoContainer.textContent = "Please enter a flight number.";
//     return;
//   }

//   displayFlightInfo(flightNumber);
// });
































// const flightNumberInput = document.getElementById("flight-number");
// const submitButton = document.getElementById("submit");
// const flightInfoContainer = document.getElementById("flight-info");

// const fetchFlightInfo = async function () {
//   try {
//     const response = await fetch(
//       `https://airlabs.co/api/v9/${flight}?flight_iata=AA6&api_key=0a974ba6-ad84-4bc3-a877-51ea78b8798d`
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Error fetching flight information:", error);
//     throw error;
//   }
  
// };

// const displayFlightInfo = async function (flight) {
//   try {
//     let data = await fetchFlightInfo(flight);

//     if (data.status === "success") {
//       const flightInfo = `
//         <p>Flight Number: ${data.flight_number}</p>
//         <p>Departure: ${data.dep_iata}</p>
//         <p>Arrival: ${data.arr_terminal}</p>
//       `;

//       flightInfoContainer.innerHTML = flightInfo;
//     } else {
//       flightInfoContainer.textContent = "Flight not found.";
//     }
//   } catch (error) {
//     flightInfoContainer.textContent =
//       "An error occurred. Please try again later.";
//   }
// };

// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   const flightNumber = flightNumberInput.value.trim();

//   if (!flightNumber) {
//     flightInfoContainer.textContent = "Please enter a flight number.";
//     return;
//   }

//   displayFlightInfo(flightNumber);
// });





























// const flightNumberInput = document.getElementById("flight-number");
// const submitButton = document.getElementById("submit");
// const flightInfoContainer = document.getElementById("flight-info");

// const fetchFlightInfo = async function () {
//   let response = await fetch(
//     `https://airlabs.co/api/v9/flight?flight_iata=${flightNumberInput}&api_key=0a974ba6-ad84-4bc3-a877-51ea78b8798d`
//   );

//   let data = await response.json();
//   return data;
// };
// fetchFlightInfo()
// const displayFlightInfo = async function () {
//   let data = await fetchFlightInfo();

//   let flightInfo = `Flight Number: ${data.flight_number}\n
//                             Departure: ${data.dep_iata}\n
//                             Arrival: ${data.arr_terminal}\n
//                             `;
//   flightInfoContainer.innerHTML = flightInfo;
//   console.log(data);
// };

// submitButton.addEventListener("click", async function (event) {
//   event.preventDefault();
//   const flightNumber = flightNumberInput.value;
//   displayFlightInfo(flightNumber);
// });

























// // HTML elements
// const flightNumberInput = document.getElementById('flight-number');
// const submitButton = document.getElementById('submit');
// const flightInfoContainer = document.getElementById('flight-info');

// // Function to fetch flight information
// const fetchFlightInfo = async function(flight) {
//   let response = await fetch(`https://airlabs.co/api/v9/flight?flight_iata=${flight}&api_key=0a974ba6-ad84-4bc3-a877-51ea78b8798d`);
//   let data = await response.json();
//   return data;
// }

// // Event listener for submit button
// submitButton.addEventListener('click', async function() {
//   const flightNumber = flightNumberInput.value;

//   // Make sure flight number is provided
//   if (!flightNumber) {
//     flightInfoContainer.textContent = 'Please enter a flight number.';
//     return;
//   }

//   // Fetch flight information from API
//   try {
//     const data = await fetchFlightInfo(flightNumber);

//     // Display flight information
//     if (data.status === 'success') {
//       const flightInfo = `Flight Number: ${data.flight.flight_iata}<br>
//                           Departure: ${data.flight.departure.estimated}<br>
//                           Arrival: ${data.flight.arrival.estimated}`;

//       flightInfoContainer.innerHTML = flightInfo;
//     } else {
//       flightInfoContainer.textContent = 'Flight not found.';
//     }
//   } catch (error) {
//     console.log('Error fetching flight information:', error);
//     flightInfoContainer.textContent = 'An error occurred. Please try again later.';
//   }
// });

// const searchForm = document.getElementById('searchForm');
// const flightDetails = document.getElementById('flightDetails');

// const { data } = require("jquery");

// searchForm.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const flightNumber = document.getElementById('flightNumber').value;
//   getFlightDetails(flightNumber);
// });

//  async function getFlightDetails(flightNumber) {
//   // Make an API call to fetch flight details based on the flight number
//   // You would need to use a flight tracking API or an aviation data provider

//   // Example API call using fetch:
// //   fetch(`https://api.aviationstack.com/v1/flights
// //   ? access_key = 6590386e093c569c9f6b8cd928b15245`)
// const url = 'https://skyscanner-api.p.rapidapi.com/v3/culture/locales';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c18edbc782msh0fe3f290cfa580ap115e32jsn74b05e0ae3a2',
// 		'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// function displayFlightDetails(flightData) {
//   // Clear previous flight details
//   flightDetails.innerHTML = '';

//   if (flightData.data && flightData.data.length > 0) {
//     const flight = flightData.data[0];
//     const flightInfo = document.createElement('p');
//     flightInfo.textContent = `Flight ${flight.flight.iata} from ${flight.departure.airport} to ${flight.arrival.airport}`;

//     const departureTime = document.createElement('p');
//     departureTime.textContent = `Scheduled departure time: ${flight.departure.estimated}`;

//     const arrivalTime = document.createElement('p');
//     arrivalTime.textContent = `Scheduled arrival time: ${flight.arrival.estimated}`;

//     // Append flight details to the webpage
//     flightDetails.appendChild(flightInfo);
//     flightDetails.appendChild(departureTime);
//     flightDetails.appendChild(arrivalTime);
//   } else {
//     flightDetails.textContent = 'Flight details not found.';
//   }
// }
// const url = 'https://flight-info-api.p.rapidapi.com/status?version=v2';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c18edbc782msh0fe3f290cfa580ap115e32jsn74b05e0ae3a2',
// 		'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// // create a displayFlightDetails function that takes in the flight data and displays it on the page
// function displayFlightDetails(flightData) {
//     // Clear previous flight details
//   flightDetails.innerHTML = '';

//   if (flightData.data && flightData.data.length > 0) {
//     const data = flightData.data[0];
//     const flightInfo = document.createElement('p');
//     flightInfo.textContent = `Flight ${data.0.carrier.iata} from ${data.carriers.departure.airport} to ${data.carriers.arrival.airport}`;

//     const departureTime = document.createElement('p');
//     departureTime.textContent = `Scheduled departure time: ${data.de}`;

//     const arrivalTime = document.createElement('p');
//     arrivalTime.textContent = `Scheduled arrival time: ${flight.arrival.estimated}`;

//     // Append flight details to the webpage
//     flightDetails.appendChild(flightInfo);
//     flightDetails.appendChild(departureTime);
//     flightDetails.appendChild(arrivalTime);
//   } else {
//     flightDetails.textContent = 'Flight details not found.';
//   }
// }

// function that fetch a api
