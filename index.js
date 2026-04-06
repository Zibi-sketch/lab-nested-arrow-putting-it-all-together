function createLoginTracker(userInfo) {
let correctPassword = userInfo.password;
let failedAttempts = 0;
let locked = false;

  return function(passwordAttempt) {

    if(locked){
      return "Account is locked.";
    }

    if (passwordAttempt === correctPassword) {
      failedAttempts = 0;
      return "Login successful";
      
    }

      failedAttempts ++;

    if (failedAttempts >= 3){
      locked = true;
      return "Account locked";
    }
    return "Login failed. Login attempt number: " + (failedAttempts);
  }
}


module.exports = createLoginTracker;

