function createLoginTracker(userInfo) {
let correctPassword = userInfo.password;
let failedAttempts = 0;
let locked = false;

  return (passwordAttempt) => {

    if(locked){
      return "Account is locked. No more login attempts allowed.";
    }

    if (passwordAttempt == correctPassword) {
      failedAttempts = 0;
      return "Login successful";
      
    }

    else{
      failedAttempts ++;
    }

    if (failedAttempts >= 3){
      locked = true;
      return "Account locked due to too many failed login attempts";
    }
    return "Login failed\nLogin attempt number: " + (failedAttempts) + " out of 3.";
  }
}

let userInput = {
  username: "Ziza",
  password: "Pinkflamingo",
}

let login = createLoginTracker(userInput);

console.log (login(userInput));
console.log (login(userInput));
console.log (login(userInput));
console.log (login(userInput));

module.exports = createLoginTracker;