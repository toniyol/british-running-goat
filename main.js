// function that displays alert and updates count on page
function increaseCount() {
   //display page alert
  alert("hehe");

  // get the current count from the page
  count = Number(document.getElementById("count").innerHTML);

  // increase the count
  count = count + 10;

  // update the page
  document.getElementById("count").innerHTML = count;
}

// attach the function to the button, so that it's triggered on each click
document
  .getElementsByTagName("button")[0]
  .addEventListener("click", increaseCount);


//$("input").on("click", function() {
//  alert("Coolio thanks!");
//});

function msg() {
  alert("Coolio thanks!");
}
