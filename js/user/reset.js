console.log("in reset.js");

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
  
       const userData={
         newPassword:$('#password').val(),
      };

       if ( error_password === false) {
         localStorage.setItem("newPassword",$('#password').val());    
         // var token= localStorage.getItem("token");
         // console.log("token =>",token);

         $.ajax({//take a token from email
            url: "http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password?access_token=0tKykLfQL6q6SDJ2mUDHyaGNJVFpBLd17aZ9YTacuyQUGIYL55FNqq1EwrKRLFiM",
            data: JSON.stringify(userData),
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            //headers: {"Authorization": "FlQj4C6jtK5aNc4pN3g8KsaPck8NDk8mUAEC70lKZ3ZzOqmuKR8Ze4oFLEbH24GK"},
            success: function (result) {
            console.log("reset result ==>", result);

            alert(" Password Changed Successfully");
            resetForm();
            },
            error: function (errorMessage) {
            console.log("Error", errorMessage);
            alert("errorMessage==>",errorMessage.responseText);
            }
         })
          return true;
       } else {
          alert("Please Fill the field");
          return false;
       }
    });
  });
  function resetForm(){
   document.getElementById("password").value="";
   }