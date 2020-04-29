$(function() {

    $("#fname_error_message").hide();
    $("#lname_error_message").hide();
    $("#email_error_message").hide();
    $("#password_error_message").hide();
    $("#confirm_error_message").hide();
  
    var error_fname = false;
    var error_sname = false;
    var error_email = false;
    var error_password = false;
    var error_retype_password = false;
  
    $("#first").focusout(function(){
       check_fname();
    });
    $("#second").focusout(function() {
       check_sname();
    });
    $("#email").focusout(function() {
       check_email();
    });
    $("#pass").focusout(function() {
       check_password();
    });
    $("#conf").focusout(function() {
       check_retype_password();
    });
  
    function check_fname() {
       var pattern = /^[a-zA-Z]*$/;
       var fname = $("#first").val();
       if (pattern.test(fname) && fname !== '') {
          $("#fname_error_message").hide();
          $("#first").css("border-bottom","2px solid #34F458");
       } else {
          $("#fname_error_message").html("Should contain only Characters");
          $("#fname_error_message").show();
          $("#first").css("border-bottom","2px solid #F90A0A");
          error_fname = true;
       }
    }
  
    function check_sname() {
       var pattern = /^[a-zA-Z]*$/;
       var sname = $("#second").val()
       if (pattern.test(sname) && sname !== '') {
          $("#sname_error_message").hide();
          $("#second").css("border-bottom","2px solid #34F458");
       } else {
          $("#sname_error_message").html("Should contain only Characters");
          $("#sname_error_message").show();
          $("#second").css("border-bottom","2px solid #F90A0A");
          error_fname = true;
       }
    }
  
    function check_password() {
       var password_length = $("#pass").val().length;
       if (password_length < 8) {
          $("#password_error_message").html("Atleast 8 Characters");
          $("#password_error_message").show();
          $("#pass").css("border-bottom","2px solid #F90A0A");
          error_password = true;
       } else {
          $("#password_error_message").hide();
          $("#pass").css("border-bottom","2px solid #34F458");
       }
    }
  
    function check_retype_password() {
       var password = $("#pass").val();
       var retype_password = $("#conf").val();
       if (password !== retype_password) {
          $("#retype_password_error_message").html("Passwords Did not Matched");
          $("#retype_password_error_message").show();
          $("#conf").css("border-bottom","2px solid #F90A0A");
          error_retype_password = true;
       } else {
          $("#retype_password_error_message").hide();
          $("#conf").css("border-bottom","2px solid #34F458");
       }
    }
  
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
  
    $("#myButton").click(function () {
      console.log("in button");
      
       error_fname = false;
       error_sname = false;
       error_email = false;
       error_password = false;
       error_retype_password = false;
  
       check_fname();
       check_sname();
       check_email();
       check_password();
       check_retype_password();
  
       const userData={
         firstName:$('#first').val(),
         lastName:$('#second').val(),
         service:"advance",
         email:$('#email').val(),
         password:$('#pass').val() 
      };

      console.log("user data ",userData);
      
       if (error_fname === false && error_sname === false && error_email === false && error_password === false && error_retype_password === false) {
             localStorage.setItem("firstName",$('#first').val());
             localStorage.setItem("lastName",$('#second').val());
             localStorage.setItem("email",$('#email').val());
             localStorage.setItem("password",$('#pass').val());    
           
         
            $.ajax({
            url: "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
            data: JSON.stringify(userData),
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
            console.log("Register", result);
            alert("Registration Successfull");
            resetForm();
            },
            error: function (errorMessage) {
            console.log("Error", errorMessage);
            alert("errorMessage",errorMessage.responseText);
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
     document.getElementById("first").value="";
     document.getElementById("second").value="";
     document.getElementById("email").value="";
     document.getElementById("pass").value="";
     document.getElementById("conf").value="";
  }
