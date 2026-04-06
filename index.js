function createLoginTracker(userInfo) {
let passwordAttempt = "Pinkflamingo";
let failedAttempts = 0;
let locked = false;

  return () => {
  failedAttempts++;//increase after each attempt

    if (passwordAttempt == userInfo.password && failedAttempts <= 3) {
      console.log("Login successful");
      failedAttempts = 0;//reset if successful
    }

    else if (passwordAttempt !==userInfo.password && failedAttempts <= 3){
      console.log( "Login failed\nLogin attempt number: " + (failedAttempts) + " out of 3.");
    }

    else if (failedAttempts > 3){
      locked = true;
      console.log("Account locked due to too many failed login attempts");
    }

    if(locked){
      console.log ("Account is locked. No more login attempts allowed.");
    }
  }
}

let userInput = {
  username: "Ziza",
  password: "Pinkflamingo",
}

let login = createLoginTracker(userInput);

login(userInput);
login(userInput);
login(userInput);
login(userInput);
