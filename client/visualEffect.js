$(document).ready(function(){

    $('.aDie').click(function(){
        var spin = $(this);
        spin.addClass('spin');
        setTimeout(function (){
            spin.removeClass('spin');
        }, 1000);
    });
});
