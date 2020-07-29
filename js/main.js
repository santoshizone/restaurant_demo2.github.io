$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      		autoplay:false,
      		paginationSpeed : 800,
   			rewindSpeed : 1000,
 
      		items : 4,
      		scrollPerPage :true,

      		pagination:true,
      		itemsDesktop : [1199,3],
      		itemsDesktopSmall : [979,3]

 
  });
 
});


mybutton = document.getElementById("myBtn2");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
