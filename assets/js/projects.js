// document.body.onload = function(){
// 	document.body.style.display = "block"
//   };
  
  
function show(elementId) { 
    document.getElementById("sdk").style.display="none";
    document.getElementById("seam").style.display="none";

    let clicked = document.getElementById(elementId)
    clicked.style.display="flex";
    // clicked.style.backgroundColor="black";
}


function hideCard(ID) {
	let curr = document.getElementById(ID);
	// curr.style.display = "none";
	curr.style.opacity = 0;
}

function showCard(ID) {
	let curr = document.getElementById(ID);
	// curr.classList.remove("hidden");
	curr.style.opacity = 1;
	curr.style.display = "block";

}

// let container = document.getElementById("topiContainer");

// container.onmouseover = function() {

//   hideCard("topiaria");
//   showCard("topiariaBW");
//   // showCard("topiariaText");
// }

// container.onmouseout = function() {
//   showCard("topiaria");
//   hideCard("topiariaBW");
//   // hideCard("topiariaText");
// }

function openTopi() {
  window.open("https://newart.city/show/topiaria");
}
document.getElementById("topiContainer").onclick = openTopi;

