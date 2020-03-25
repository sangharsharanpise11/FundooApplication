$(function() {
    $("#email_error_message").hide();

    var error_email = false;
  
   
    $("#email").focusout(function() {
       check_email();
    });
    
  
    
    function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#email").val();
        if (pattern.test(email) && email !== '') {
           $("#email_error_message").hide();
           $("#email").css("border-bottom","2px solid #34F458");
        } else {
           $("#email_error_message").html("Invalid Email");
           $("#email_error_message").show();
           $("#email").css("border-bottom","2px solid #F90A0A");
           error_email = true;
        }
     }
   
   
    $("#forgotButton").click(function () {
      console.log("in button");
      
       error_email = false;
  
       check_email();
  
       if ( error_email === false ) {
          alert("link send Successfull");
          return true;
       } else {
          alert("Please Fill the form Correctly");
          return false;
       }
    });
  });

