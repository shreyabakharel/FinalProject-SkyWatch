class Flight{
  constructor(number){
    this._number = number
  }

  get number(){
    return this._number
  }

  saveToLocalStorage(){
    localStorage.setItem('number',JSON.stringify(this._number))
  }

 getLocalStorage(){
  localStorage.getItem(JSON.parse('number'))
 }
  
}



const fetchDATA = async (newFlight) =>{
let data = newFlight.number
console.log(data)
let response = await fetch(`https://airlabs.co/api/v9/airlines?name=${data}&api_key=183ae736-f269-4147-a31d-8b9bc99b29b3
`)
let result = await response.json()
console.log(result)
}