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
    success: function (status) {
    // console.log("note create result ==>", result);

    localStorage.setItem("NoteId ",status.collaborators.id);
    console.log(localStorage.getItem('NoteId is :',NoteId));
      console.log("id============>", result.data.data.id);
      // resetForm();
      // $(location).attr('href',"/views/dashboard/dashboard.html");
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

// $(document).ready(function(){
// $("#note").click(function(){
//     $("#openNote").css("display","block")
// });
// });

var token= localStorage.getItem("token");
console.log("token =>",token);

var notes=[];

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
  
$(document).ready(function(){

  $.ajax({
      
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
      type: "GET",
      headers: { 'Authorization': localStorage.getItem('token') },
      
      success: function(result){
      notes=result.data.data;
      console.log("notes = ",notes);

       var wrapper = document.getElementById("display");
       var id = document.getElementById("id");
    
       var myHTML = ''; 
       for (var i = 0; i <notes.length; i++) {  
          myHTML +='<tr><div class="card" id='+[i]+'><div class="card-body"><div class="info" style="color: black; "><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span></div><div id="desc" class="desc" style="margin-top: 20px;"><span>'+notes[i].description+'</span></div></div><ul class="icon" style="padding-right: 10px; display: flex;"><li class="icon-item"><i class="material-icons" id="">add_alert</i></li><li class="icon-item"><i class="material-icons" id="">person_add</i></li>   <li class="icon-item"><i class="fas fa-palette" id=""></i></li><li class="icon-item"><i class="far fa-image" id=""></i></li><li class="icon-item" id="archieveNote"><img src="/images/archieve.png" style="width: 20px; height: 18px;"></i></li><li class="icon-item dropdown" ><i class="fas fa-ellipsis-v" role="button" data-toggle="dropdown" id="moreIcon"></i><ul class="dropdown-menu" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item">Change labels</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></div></div></div></tr>';
      }
         wrapper.innerHTML = myHTML
       
   }});
});


/*********************** update note ************************************************************************/
$(document).ready(function () {
  $(document).on("click" , ".info" , function(e) { 
    // $('#myModal').toggle();
    alert($(this).closest('div.card').attr('id'));
    // console.log("data is ",('this').text());

    // $tr = $(this).closest('tr').closest('.card').closest('.card-body').closest('.info');
    // console.log($tr,"dom");

    // var data =$tr.children("span").map(function(){
    //       return $(this).text();
    //     }).get();
    //     console.log("data is :",data);
    
    //     $('.updateTitle').val(data[0]);
    //     $('.updateDesc').val(data[1]);
   });
});


$(document).ready(function(){
  $("#updateData").click(function(){
   alert("update  note");
   console.log("update note");
   
    error_title = false;
    error_desc = false;

    check_title();
    check_desc();

   const updateNoteData={
      title:$('.updateTitle').val(),
      description:$('.updateTitle').val(),
    };


    title=$('.updateTitle').val();
    description=$('.updateTitle').val();

    console.log("title=",title);
    console.log("desc=",description);
    console.log(updateNoteData);


if ( error_title === false && error_desc === false)
{
   var token= localStorage.getItem("token");
   console.log("token =>",token);
   console.log("notes data ",updateNoteData);
   
   $.ajax({
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",
    data:  JSON.stringify(updateNoteData),  
    type: "POST",
    headers: {
       'Authorization': localStorage.getItem('token')
       },
    contentType: "application/json;charset=utf-8",
    success: function (result) {
    console.log("note update result ==>", result);

     
      console.log("id============>", result.id);
      alert("note update Successfull");
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
});

// /********************* delete note **********************************************************/ 
$(document).on("click" , "#deleteNote" , function(e) { 
    
    noteId=$(this).closest('div.card').attr('id');
    alert("noteId = "+noteId); 
   
    data = notes[noteId].id;
 
    $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",
      data:  JSON.stringify({
        "isDeleted" : true, 
        "noteIdList" : [data]
      }),  
      type: "POST",
      headers: {
         'Authorization': localStorage.getItem('token')
       },
      contentType: "application/json",
      success: function (result) {
      console.log("note delete result ==>", result);
  
       
        console.log("id============>", result.id);
        alert("note delete Successfull");
        resetForm();
        $(location).attr('href',"/views/dashboard/dashboard.html");
        },
        error: function (errorMessage) {
        console.log("Error", errorMessage);
        alert("errorMessage==>",errorMessage.responseText);
        }
     });
  });
  
  /********************* archieve note **********************************************************/ 
 
   $(document).on("click" , "#archieveNote" , function(e) { 
    alert("in archieve");
    noteId=$(this).closest('div.card').attr('id');
        
    data = notes[noteId].id;
 
    $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",
      data:  JSON.stringify({
        "isArchived" : true, 
        "noteIdList" : [data]
      }),   
      type: "POST",
      headers: {
         'Authorization': localStorage.getItem('token')
       },
      contentType: "application/json;charset=utf-8",
      success: function (result) {
      console.log("note archive result ==>", result);
  
       
        console.log("id============>", result.id);
        alert("note archieve Successfull");
        resetForm();
        $(location).attr('href',"/views/dashboard/dashboard.html");
        },
        error: function (errorMessage) {
        console.log("Error", errorMessage);
        alert("errorMessage==>",errorMessage.responseText);
        }
     });
  });
