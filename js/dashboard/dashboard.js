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
    var pattern = /^[a-zA-Z ]*$/;
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
    var pattern = /^[a-zA-Z ]*$/;
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
     
  };

  
  title=$('#title').val();
  description=$('#desc').val();

  console.log("title=",title);
  console.log("desc=",description);
console.log(noteData);


  if ( error_title === false && error_desc === false)
  {
     var token= localStorage.getItem("token");
     console.log("token =>",token);
     console.log("notes data ",noteData);
     
     $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",
      data:  JSON.stringify(noteData),  
      type: "POST",
      headers: {
         'Authorization': localStorage.getItem('token')
       },
      contentType: "application/json;charset=utf-8",
      success: function (result) {
      console.log("note create result ==>", result);

       
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
      alert("Please Fill Correctly");
      return false;
   }
  });
});
function resetForm(){
document.getElementById("title").value="";
document.getElementById("desc").value="";
}

/****************************** display note on dashboard ************************************************/
  
console.log("in display note");
  
$(document).ready(function(){
  $("#note").click(function(){
      $("#openNote").css("display","block")
  });
});

 var token= localStorage.getItem("token");
 console.log("token =>",token);

 var notes=[];
 $(document).ready(function(){
  
    $.ajax({
        
        url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
        type: "GET",
        headers: { 'Authorization': localStorage.getItem('token') },
        
        success: function(result){
        notes=result.data.data;
        console.log("notes = ",notes);
setTimeout(() => {
  
        var wrapper = document.getElementById("display");
        var myHTML = '';
      
        for (var i = 0; i <notes.length; i++) {
          myHTML += '<div class="card" id="note"><div class="card-body"><div class="info" style="color: black; "><div class="tit" id="tit"><span>'+notes[i].title+'</span></div><div id="desc" class="desc" style="margin-top: 20px;"><span>'+notes[i].description+'</span></div><div class="icons" style="padding-right: 10px;"><i class="material-icons">add_alert</i><i class="material-icons">person_add</i><i class="fas fa-palette"></i><i class="far fa-image"></i><img src="/images/archieve.png" style="width: 20px; height: 18px;"> <i class="fas fa-ellipsis-v"></i> </div></div></div></div>';
        }
           wrapper.innerHTML = myHTML
      }, 1000);
        
     }});
  });


  