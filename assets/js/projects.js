document.getElementById("0")
.addEventListener("click", function() {
//   if (this.classList.contains("active")) {
//     this.classList.remove("active");
//   } else this.classList.add("active");
	var active = document.getElementsByClassName("active");
	for (let i=0; i < active.length; i++) {
		active[i].className = 'inactive';
	}
	
	// let button = document.getElementById(buttonId);
	this.className = 'active';
});

document.getElementById("1")
.addEventListener("click", function() {
	var active = document.getElementsByClassName("active");
	for (let i=0; i < active.length; i++) {
		active[i].className = 'inactive';
	}
	// let button = document.getElementById(buttonId);
	this.className = 'active';
});


function show(elementId, buttonId) { 
    document.getElementById("sdk").style.display="none";
    document.getElementById("seam").style.display="none";

    let clicked = document.getElementById(elementId)
    clicked.style.display="flex";
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

function openTopi() {
  window.open("https://newart.city/show/topiaria");
}
document.getElementById("topiContainer").onclick = openTopi;



