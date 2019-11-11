$("document").ready(function($){
    if ($(window).width() > 992) {
        $('.header-form > div').addClass('input-group');
    } else {
        $('.header-form > div').removeClass('input-group');
    }


    $('form button[type="submit"]').on('click', function() {
        var email = $(this).parent().parent().find('input').val();

        if(isEmail(email)) {
            alert("Email sended");
        } else {
            alert("Incorrect email");
        }
    });



    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
});