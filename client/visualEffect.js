$(document).ready(function(){

    $('.aDie').click(function(){
        // $this.addClass('spin');
        var spin = $(this);
        console.log($(this));
        spin.addClass('spin');
        setTimeout(function (){
            console.log('time start');
            spin.removeClass('spin');
        }, 500);
        // $(this).removeClass('spin');
    });
});