

// Date Picker
$( function() {
  $( "#datepicker" ).datepicker();
} );


// Hide Statistics
function hideAll() {
    const x = document.querySelector('.statistics');
    const hide = document.querySelector('.hide-all');

    if (x.style.display === "none"){
        x.style.display = "block";
        hide.innerHTML = "Hide All";
    } else {
        x.style.display = "none";
        hide.innerHTML = "View All";
    }

}


// View More Job description
const more = document.getElementsByClassName('more');
let i;

for (i = 0; i < more.length; i++) {
    more[i].addEventListener("click", function(){
        this.classList.toggle("active");

        const desc = this.nextElementSibling;
        if (desc.style.display === "block"){
            desc.style.display = "none";
        } else {
            desc.style.display = "block";
        }
    });
}



// change heart icon
$(document).ready(function () {
    $('i').click(function () {
        $(this).toggleClass('fa-solid fa-heart-circle-plus fa-solid fa-heart-circle-minus');
    });
});


