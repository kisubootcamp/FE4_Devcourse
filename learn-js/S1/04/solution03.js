const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn !== true) {
  console.log("Please log in");
} else if (isLoggedIn === true && isAdmin === false) {
  console.log("Access denined");
} else if (isLoggedIn === true && isAdmin === true) {
  console.log("Welcome, Admin");
}
