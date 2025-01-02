function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    //return username 
}

function createUser(username, email, password){
    this.username = SetUsername(username)
   console.log(SetUsername(username))
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);