function show(elementId) { 
    document.getElementById("sdk").style.display="none";
    document.getElementById("seam").style.display="none";

    let clicked = document.getElementById(elementId)
    clicked.style.display="flex";
    // clicked.style.backgroundColor="black";
}
