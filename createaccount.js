class NewUser {
  constructor(firstname, lastname, email, username, password){
    this.firstname = firstname,
    this.lastname = lastname,
    this.email = email,
    this.username = username,
    this.password = password
  }

  get getFirstName(){
    return this.firstname;
  }

  set setFirstName(firstname){
    return this.firstname = firstname;

  }

  get getLastName(){
    return this.lastname;
  }

  set setLastName(lastname){
    return this.lastname = lastname;
  }

  get getEmail(){
    return this.email = email;
  }

  set setEmail(email){
    return this.email = email;
  }

  get getUserName(){
    return this.username;
  }

  set setUserName(username){
    return this.username = username;
  }

  set setPassword(password){
    return this.password = password;
  }



}


const postToBackEnd = async (newAccount) => {
  try {
    const response = await fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAccount)
    });

    if (response.ok) {
      // Request was successful
      const data = await response.json();

      const userid = data.id
      window.location.href = `/user/{id}`;
    } else {
      // Request failed
      throw new Error('Request failed');
    }
  } catch (error) {
    // Handle the error
    console.error('Error:', error);
  }
};



//event listener 
document.getElementById('button').addEventListener('form', function(e){
  e.preventDefault();

  let lastname = document.getElementById('lname').value;
  let firstname = document.getElementById('fname').value;
  let email = document.getElementById('email').value;
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  let newAccount = new NewUser(firstname, lastname, email, username, password);

  postToBackEnd(newAccount);




})