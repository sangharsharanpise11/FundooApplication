
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
  
       if ( error_email === false && error_password === false)
       {
          alert("login Successfull");
          return true;
       }
        else 
       {
          alert("Please Fill the form Correctly");
          return false;
       }
    });
  });

 let signin= document.getElementById('signin');
 signin.addEventListener('click',buttonClickHandler)

  function buttonClickHandler(){
    const xhr=new XMLHttpRequest();
    console.log("i am called");
    
    xhr.open('POST','http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',true)
    xhr.getResponseHeader('content-type','application/json')

    xhr.onprogress=function()
    {
       console.log("in progress");  
    }

    xhr.onload=function()
    {
       if(this.status===200)
       {
          console.log(this.responseText);
       }
       else
       {
          console.error("some error occured");
       }
    }  
    
    param={"email":"document.getElementById('email')","password":"document.getElementById('password')"}
    xhr.send(param);
   }; 