
$(function(){

    $('#btn').click(function(){
        
        var errormessage = '';
        $('#error').html(errormessage);

        function validateEmail(email) {
            const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return pattern.test(email);
        }

        if($('#email').val() == ''){
            errormessage += "<p> *Please enter email </p>";
            $('#error').html(errormessage);
        }else if(validateEmail($('#email').val())==false){
            errormessage += "<p> *Please enter the correct e-mail address.</p>";
            $('#error').html(errormessage);
        }

        if($('#phone').val() == ''){
            errormessage += "<p> *Please enter phone number </p>";
            $('#error').html(errormessage);
        }else if($.isNumeric($('#phone').val()) == false  ){
            errormessage += "<p> *Please enter correct phone number </p>";
            $('#error').html(errormessage);
        }

        if($('#password').val() == ''){
            errormessage += "<p> *Please enter password </p>";
            $('#error').html(errormessage);
        }

        if($('#repassword').val() != $('#password').val()){
            errormessage += "<p> *Please enter some password </p>";
            $('#error').html(errormessage);
        }

        

        return false

    });

});
