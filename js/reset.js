$(function() {
    $("#password_error_message").hide();

    var error_password = false;

    $("#password").focusout(function() {
       check_password();
    });
   
    function check_password() {
       var password_length = $("#password").val().length;
       if (password_length < 8) {
          $("#password_error_message").html("Atleast 8 Characters");
          $("#password_error_message").show();
          $("#password").css("border-bottom","2px solid #F90A0A");
          error_password = true;
       } else {
          $("#password_error_message").hide();
          $("#password").css("border-bottom","2px solid #34F458");
       }
    }
  
   
    $("#next").click(function () {
      console.log("in button");
      
       error_password = false;
  
       check_password();
  
       if ( error_password === false) {
          alert("reset password Successfull");
          return true;
       } else {
          alert("Please Fill the form Correctly");
          return false;
       }
    });
  });

