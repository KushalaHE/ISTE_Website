$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loading');
        setTimeout(function(){
            $('h1').css('color','#222222');
        }, 3000);
    })
});