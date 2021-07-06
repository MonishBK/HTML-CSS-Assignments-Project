
// Pre loader
$(window).on('load', () =>{
    $("#loader").fadeOut("slow")
})


// on scroll effect
window.onscroll = () => {
    if (window.pageYOffset > 100) {
        document.getElementById("header").style.backgroundColor = "rgba(0, 0, 0, .5)";      
    } else {
        document.getElementById("header").style.backgroundColor = "transparent";

    }
}


// handburger toggle
$(document).ready( () =>{
    $('#nav_toggle').click(() =>{
        $(".nav_items").toggleClass('show');
    });
})






