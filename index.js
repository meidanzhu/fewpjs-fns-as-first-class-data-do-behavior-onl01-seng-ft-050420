/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString){
  let time = timeString.split(':');
  console.log(time[0]);

  if (timeString < 12){
    time = 'Good Morning'
  }
  else if () {

  }
  else{

  }
}
