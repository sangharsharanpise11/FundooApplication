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
  
       const userData={
         email:$('#email').val(),
      };
       if ( error_email === false ) {
         var token= localStorage.getItem("token");
         $.ajax({
            url: "http://fundoonotes.incubation.bridgelabz.com/api/user/reset?access_token=token",
            data: JSON.stringify(userData),
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
            console.log("forget result ==>", result);

            alert(" Successfull");
            resetForm();
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
   }
