function createLoginTracker(userInfo) {
let attemptCount = 0;
let locked = false;

  let confirmLogin = (passwordAttempt) => {

    if(locked){
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password || attemptCount < 3) {
      attemptCount = 0;
      return "Login successful";
      
    }

    else if (failedAttempts >= 3){
      locked = true;
      return "Account locked";
    }
    
    else{
      attemptCount ++;
      return `Attempt ${attemptCount}: Login failed`;
    }

  }
}


let userInfo = {
  username: "Ashley",
  password: "Pinkflamingo",
}

const { createLoginTracker } = require('../index');