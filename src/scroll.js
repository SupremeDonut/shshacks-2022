window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;
    if (scroll > 70) {
        document.getElementsByClassName('navbar')[0].style.boxShadow = "0 5px 10px rgb(0 0 0 / 0.2)";
    } else{
        document.getElementsByClassName('navbar')[0].style.boxShadow = "none";
    }
});