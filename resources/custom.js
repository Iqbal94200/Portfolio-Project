// AOS.init();
//google sheet connect code
var scriptURL="https://script.google.com/macros/s/AKfycbw6355OsqSlYghnEsZe-mLegeQoim6lfmjza1yaqgiy3bmjCnRQOACd81kAF1ydBy4gYw/exec";
var form= document.forms['google-sheet'];
form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST', body:new FormData(form)})
    .then(response=> alert("Thanks for connecting us..! We will contact you soon..."))
    .catch(error => console.error('Error', error.message))
     });
    //scroll to top
    $("#top-button").click(
        function(){
            $("html, body").animate({scrollTop: 0}, 1000);
        }
    );