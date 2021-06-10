// document.body.onload = function(){
//     document.body.style.display = "block"
//   };

function show(elementId) { 
    document.getElementById("sdk").style.display="none";
    document.getElementById("seam").style.display="none";

    let clicked = document.getElementById(elementId)
    clicked.style.display="flex";
    // clicked.style.backgroundColor="black";
}

// Create the observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('animation');
        }
      });
  });
  
  // Tell the observer which elements to track
  observer.observe(document.querySelector('.animation'));
