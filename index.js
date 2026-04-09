function createLoginTracker(userInfo) {
  let attemptCount = 0;
  let locked = false;

  return function (passwordAttempt) {
    if (locked) {
      return "Account locked due to too many failed login attempts";
    }

    // Correct password
    if (passwordAttempt === userInfo.password) {
      attemptCount = 0;
      return "Login successful";
    }

    // Incorrect password
    else if (passwordAttempt !== userInfo.password && attemptCount < 3){
    attemptCount++;
    return `Attempt ${attemptCount}: Login failed`;
    }

    if (attemptCount = 3) {
      locked = true;
      return "Account locked due to too many failed login attempts";
    }

  };
}

module.exports = { createLoginTracker };