$("#close").click(function () {
    console.log("in button");

    const noteData={
       title:$('#title').val(),
       desc:$('#desc').val() 
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

function resetForm(){
 document.getElementById("email").value="";
 document.getElementById("password").value="";
 }