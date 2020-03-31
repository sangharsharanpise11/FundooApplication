
console.log("in ligin.js");

$(function() {
    $("#email_error_message").hide();
    $("#password_error_message").hide();

    var error_email = false;
    var error_password = false;
  
   
    $("#email").focusout(function() {
       check_email();
    });
    $("#password").focusout(function() {
       check_password();
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
  
   
    $("#signin").click(function () {
      console.log("in button");
      
       error_email = false;
       error_password = false;
  
       check_email();
       check_password();
  
       const userData={
         email:$('#email').val(),
         password:$('#password').val() 
      };

      console.log("user data ",userData);

       if ( error_email === false && error_password === false)
       {
         $.ajax({
            url: "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
            data: JSON.stringify(userData),
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
            console.log("Login result ==>", result);

            localStorage.setItem("token",result.id);
            console.log("id============>", result.id);
            alert("Login Successfull");
            resetForm();
            $(location).attr('href',"/views/dashboard/dashboard.html");
            },
            error: function (errorMessage) {
            console.log("Error", errorMessage);
            alert("errorMessage==>",errorMessage.responseText);
            }
         })
          return true;
       } else {
          alert("Please Fill the form Correctly");
          return false;
       }
    });
  });
  function resetForm(){
   document.getElementById("email").value="";
   document.getElementById("password").value="";
   }
