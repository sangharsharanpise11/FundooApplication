  $(document).ready(function(){
    $("#openNav").click(function(){
      $(".w3-sidebar").toggle();
    });
  });
 
  $(document).ready(function(){
    $("#note").click(function(){
        $(".createNote").css("display","block")
      $("#note").css("display","none");
    });
  });


// title	
// description	
// labelIdList	
// checklist	
// isPined		
// isArchived
// color	
// reminder	
// collaberators	
//http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes?access_token=token


$(function() {
  $("#title_error_message").hide();
  $("#desc_error_message").hide();

  var error_title = false;
  var error_desc = false;

 
  $("#title").focusout(function() {
     check_title();
  });
  $("#desc").focusout(function() {
     check_desc();
  });
 

  
  function check_title() {
    var pattern = /^[a-zA-Z]*$/;
    var title = $("#title").val()
    if (pattern.test(title) && desc !== ''){
         $("#title_error_message").hide();
         $("#title").css("border-bottom","2px solid #34F458");
      } else {
         $("#title_error_message").html("Invalid title");
         $("#title_error_message").show();
         $("#title").css("border-bottom","2px solid #F90A0A");
         error_title = true;
      }
   }
 
  function check_desc() {
    var pattern = /^[a-zA-Z]*$/;
    var desc = $("#desc").val()
    if (pattern.test(desc) && desc !== '') 
    {
      $("#desc_error_message").hide();
      $("#title").css("border-bottom","2px solid #34F458");
    } else {
      $("#desc_error_message").html("Invalid description");
      $("#desc_error_message").show();
      $("#desc").css("border-bottom","2px solid #F90A0A");
      error_desc = true;
   }
  }

$("#close").click(function () {
  console.log("in button");
   
  error_title = false;
  error_desc = false;

  check_title();
  check_desc();

   const noteData={
     title:$('#title').val(),
     description:$('#desc').val(),
     labelIdList:"",	
     checklist:"",	
     isPined:"",		
     isArchived:"",
     color:"",	
     reminder	:"",
     collaberators:"" 
  };

  console.log("note data ",noteData);

  if ( error_title === false && error_desc === false)
  {
     var token= localStorage.getItem("token");
     console.log("token =>",token);
     $.ajax({
        url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes?access_token=token",
        data: JSON.stringify(noteData), 
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
        console.log("note create result ==>", result);

        localStorage.setItem("token",result.id);
        console.log("id============>", result.id);
        alert("note create Successfull");
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
document.getElementById("title").value="";
document.getElementById("desc").value="";
}