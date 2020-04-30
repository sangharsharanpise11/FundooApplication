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
   
   var x = document.getElementById("snackbarNoteCreate")
    // Add the "show" class to DIV
    x.className = "show";

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
      resetForm();
    
      $( "div.createNote" ).replaceWith( "<div class='noteOne' style='margin-top: 160px;' id='note'><div id='flip'><b class='head' style='color: gray;'>Take a note ...</b><div class='threeIcons'><i class='material-icons cal'>assignment_turned_in</i><i class='fas fa-paint-brush'></i><i class='fas fa-image'></i></div></div></div>" );
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);

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

/*********************** pin and unpin notes **************************************************************/ 
      var pinNotes=[];var unpinNotes=[];
      for(var i=0;i<notes.length;i++){
        if(notes[i].isPined === true){
          pinNotes.push(notes[i]);
        }
        else{
        unpinNotes.push(notes[i]);
        }
      }
      console.log("pin : ",pinNotes);
      console.log("unpin : ",unpinNotes);

        /** PIN ****/  
       var wrapper = document.getElementById("pinnedNotes");
       var id = document.getElementById("id");
    
       var myHTML = ''; 
       for (var i = 0; i < pinNotes.length; i++)
        {  
          myHTML +='<div class="card" id='+[i]+'><img src="/images/unpinnnn.png" id="unpin" ><div class="card-body"><div class="info" style="color: black; "><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span></div><div id="desc" class="desc" style="margin-top: 20px;"><span>'+notes[i].description+'</span></div></div><ul class="noteIcon" ><li class="icon-item"><i class="material-icons"  id="remainder"  data-toggle="modal" data-target="#myRemindModal">add_alert</i></li><li class="icon-item"><i class="material-icons" id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal">person_add</i></li> <li class="icon-item dropdown"><i class="fas fa-palette dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color"  class="color" value="#FF0000"  style="background-color: #FF0000;"></div></li><li><div href="#" class="color"  value="#FFA500" style="background-color: #FFA500;"></div></li><li><div href="#" class="color"  value="#FFFF00" style="background-color: #FFFF00;"></div></li><li><div href="#" class="color"  value="#008000" style="background-color: #008000;"></div></li><li><div href="#" class="color"  value="#008080" style="background-color: #008080"></div></li><li><div href="#" class="color"   value="#0000FF" style="background-color: #0000FF;"></div></li><li><div href="#" class="color"  value="#0000A0" style="background-color: #0000A0;"></div></li><li><div href="#" class="color"  value="#800080" style="background-color:#800080 ;"></div></li><li><div href="#" class="color"  value="#FFC0CB" style="background-color: #FFC0CB;"></div></li></ul></li></li><li class="icon-item"><i class="far fa-image" id=""></i></li><li class="icon-item" id="archieveNote"><img src="/images/archieve.png" class="archive"></i></li><li class="icon-item dropdown" ><i class="fas fa-ellipsis-v" role="button" data-toggle="dropdown" id="moreIcon"></i><ul class="dropdown-menu" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item">Change labels</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></div></div></div>';
        }
         wrapper.innerHTML = myHTML

        /** UNPIN ****/  
       var wrapper = document.getElementById("unpinNotes");
       var id = document.getElementById("id");
    
       var myHTML = ''; 
       for (var i = 0; i < unpinNotes.length; i++)
        {  
          myHTML +='<div class="card" id='+[i]+'><img src="/images/unpinnnn.png" id="unpin" ><div class="card-body"><div class="info" style="color: black; "><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span></div><div id="desc" class="desc" style="margin-top: 20px;"><span>'+notes[i].description+'</span></div></div><ul class="noteIcon" ><li class="icon-item"><i class="material-icons"  id="remainder"  data-toggle="modal" data-target="#myRemindModal">add_alert</i></li><li class="icon-item"><i class="material-icons" id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal">person_add</i></li> <li class="icon-item dropdown"><i class="fas fa-palette dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color"  class="color" value="#FF0000"  style="background-color: #FF0000;"></div></li><li><div href="#" class="color"  value="#FFA500" style="background-color: #FFA500;"></div></li><li><div href="#" class="color"  value="#FFFF00" style="background-color: #FFFF00;"></div></li><li><div href="#" class="color"  value="#008000" style="background-color: #008000;"></div></li><li><div href="#" class="color"  value="#008080" style="background-color: #008080"></div></li><li><div href="#" class="color"   value="#0000FF" style="background-color: #0000FF;"></div></li><li><div href="#" class="color"  value="#0000A0" style="background-color: #0000A0;"></div></li><li><div href="#" class="color"  value="#800080" style="background-color:#800080 ;"></div></li><li><div href="#" class="color"  value="#FFC0CB" style="background-color: #FFC0CB;"></div></li></ul></li></li><li class="icon-item"><i class="far fa-image" id=""></i></li><li class="icon-item" id="archieveNote"><img src="/images/archieve.png" class="archive"></i></li><li class="icon-item dropdown" ><i class="fas fa-ellipsis-v" role="button" data-toggle="dropdown" id="moreIcon"></i><ul class="dropdown-menu" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item">Change labels</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></div></div></div>';
        }
         wrapper.innerHTML = myHTML
      }});
   });

/*********************** update note ************************************************************************/
// $(document).ready(function () {
//   $(document).on("click" , ".info" , function(e) { 
//     $('#myModal').toggle();
//     $(this).closest('div.card').attr('id');
//     console.log("data is ",('this').text());

//     $tr = $(this).closest('tr').closest('.card').closest('.card-body').closest('.info');
//     console.log($tr,"dom");

//     var data =$tr.children("span").map(function(){
//           return $(this).text();
//         }).get();
//         console.log("data is :",data);
    
//         $('.updateTitle').val(data[0]);
//         $('.updateDesc').val(data[1]);
//    });
// });


// $(document).ready(function(){
//   $("#updateData").click(function(){
//    alert("update  note");
//    console.log("update note");
   
//     error_title = false;
//     error_desc = false;

//     check_title();
//     check_desc();

//    const updateNoteData={
//       title:$('.updateTitle').val(),
//       description:$('.updateTitle').val(),
//     };


//     title=$('.updateTitle').val();
//     description=$('.updateTitle').val();

//     console.log("title=",title);
//     console.log("desc=",description);
//     console.log(updateNoteData);


// if ( error_title === false && error_desc === false)
// {
//    var token= localStorage.getItem("token");
//    console.log("token =>",token);
//    console.log("notes data ",updateNoteData);
   
//    $.ajax({
//     url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",
//     data:  JSON.stringify(updateNoteData),  
//     type: "POST",
//     headers: {
//        'Authorization': localStorage.getItem('token')
//        },
//     contentType: "application/json;charset=utf-8",
//     success: function (result) {
//     console.log("note update result ==>", result);

     
//       console.log("id============>", result.id);
//       alert("note update Successfull");
//       resetForm();
//       $(location).attr('href',"/views/dashboard/dashboard.html");
//       },
//       error: function (errorMessage) {
//       console.log("Error", errorMessage);
//       alert("errorMessage==>",errorMessage.responseText);
//       }
//    })
//     return true;
//  } else {
//     alert("Please Fill Correctly");
//     return false;
//  }
// });
// });
});

// /********************* delete note **********************************************************/ 
$(document).on("click" , "#deleteNote" , function(e) { 
    
    noteId=$(this).closest('div.card').attr('id');   
    data = notes[noteId].id;
 
    var x = document.getElementById("snackbarTrash")
    x.className = "show";

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
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
        resetForm();
        $(location).attr('href',"/views/dashboard/dashboard.html");
        },     
      });
    });
  
 /*
        error: function (errorMessage) {
        console.log("Error", errorMess age);
******************** archieve note **********************************************************/ 
    $(document).on("click" , "#archieveNote" , function(e) { 
    noteId=$(this).closest('div.card').attr('id');  
    data = notes[noteId].id;

    var x = document.getElementById("snackbarArchive")
    // Add the "show" class to DIV
    x.className = "show";
 
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
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
        resetForm();
      //   $(location).attr('href',"/views/dashboard/dashboard.html");
         },
        error: function (errorMessage) {
        console.log("Error", errorMessage);
        }
     });
  });

  /********************* pinUnpin note **********************************************************/ 
  $(document).on("click" , "#unpin" , function(e) { 
    
    noteId=$(this).closest('div.card').attr('id');
    data = notes[noteId].id;
    console.log(data);
    
    var x = document.getElementById("snackbarPin")
    // Add the "show" class to DIV
    x.className = "show";

      $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/pinUnpinNotes",
      data:  JSON.stringify({
        "isPined" : true, 
        "noteIdList" : [data]
      }),   
      type: "POST",
      headers: {
         'Authorization': localStorage.getItem('token')
       },
        contentType: "application/json;charset=utf-8",
        success: function (result) {
       
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
        
        },
        error: function (errorMessage) {
        console.log("Error", errorMessage);
        }
     });
  });

  /******************color to note**********************************************************************/ 
   function insert(color,noteId) {
     console.log("in insert",noteId);
     $('#noteId').closest('div.card').css("background-color",color);
  }

  $(document).on("click" , "#colors" , function(e) { 
    console.log("in color ajax");
    
    noteId=$(this).closest('div.card').attr('id');
       
    data = notes[noteId].id;
    console.log("note id is :",data);

    $(document).on("click" , "#colorList .color" , function(e) { 
      color=$(this).attr('value');
      console.log("color is :",color);

      var x = document.getElementById("snackbarColor")
      // Add the "show" class to DIV
      x.className = "show";

      $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",
      data:  JSON.stringify({
        "color" : color, 
        "noteIdList" : [data]
      }),   
      type: "POST",
      headers: {
         'Authorization': localStorage.getItem('token')
       },
        contentType: "application/json;charset=utf-8",
        success: function (result) {
        insert(color,noteId) ;
        
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
       },
        error: function (errorMessage) {
        console.log("Error", errorMessage);
        }
     });
  });
});

  /**************** remainder note **********************/ 
  $(function () {
    console.log("in datetimepicker");
    $('#datetimepicker1').datetimepicker();
  });

     $(document).on("click" , "#remainder" , function(e) { 
     console.log("in reminder ajax");
     
     noteId=$(this).closest('div.card').attr('id');
     data = notes[noteId].id;
     console.log("data is :",data);
     localStorage.setItem("noteid",data);
    
      $(document).on("click" , "#reminderData" , function(e) { 
        console.log("hiii");
        var date=$('#reminderDate').val();
        console.log("date is",date);
        
        var x = document.getElementById("snackbarReminder")
        x.className = "show";

        $.ajax({
            url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/addUpdateReminderNotes",
            data:  JSON.stringify({
              "reminder" : date,
              "noteIdList" : [data]
            }), 
            type: "POST",
              headers: {
                 'Authorization': localStorage.getItem('token')
               },
                contentType: "application/json;charset=utf-8",
                success: function (result) 
                {
                  console.log("success");
                  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
                },
                error: function (errorMessage)
                {
                 console.log("Error", errorMessage);
                }
             });
      });
    
    });
/**************************************** collaborator note ***********************************************************************/ 
function closeButton() {
  console.log("in close");
  $('#myCollaboratorModal').hide();
}

firstName=localStorage.getItem('firstName');
lastName=localStorage.getItem('lastName');
email=localStorage.getItem('email');
fullName=lastName+" "+firstName;
localStorage.setItem("fullName",fullName);

document.getElementById("fullName").innerHTML = fullName;
document.getElementById("emailData").innerHTML = email;


$(document).on("click" , "#collaborator" , function(e) { 
  console.log("in collaborator ");
 
  noteId=$(this).closest('div.card').attr('id');
  data = notes[noteId].id;
  console.log("data is :",data);
  
  $(document).on("click" , "#collabSaveBtn" , function(e) { 
   console.log("in save");
   
   var newPerson=$('.newPerson').val();
   console.log("newPerson is",newPerson);

   var collaboratorObject = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    noteIdList:data,
    userId:localStorage.getItem('userId')
    }

    var x = document.getElementById("snackbarCollaborator")
    x.className = "show";

   $.ajax({
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/"+data+"/AddcollaboratorsNotes",
    data:  JSON.stringify(collaboratorObject), 
    type: "POST",
      headers: {
         'Authorization': localStorage.getItem('token')
       },
        contentType: "application/json;charset=utf-8",
        success: function (result) 
        {
          console.log("success");
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
        },
        error: function (errorMessage)
        {
         console.log("Error", errorMessage);
        }
      });
    });   
  });


/**************************************** Label create ***********************************************************************/ 

// $(document).on("click" , "#createLabel" , function(e) { 
//   console.log("in label ");
 
  // noteId=$(this).closest('div.card').attr('id');
  // data = notes[noteId].id;
  // console.log("data is :",data);
  
  $(document).on("click" , "#createLabel" , function(e) { 
   console.log("in label");
  
    var newlabel= $('.newLabel').val();
    console.log("***",newlabel);
    
   var labelCreate = {
      label: $('.newLabel').val(),
      isDeleted : false,
      userId: localStorage.getItem('userId')
    }


    var x = document.getElementById("snackbarLabel")
    x.className = "show";

   $.ajax({
    url: "http://fundoonotes.incubation.bridgelabz.com/api/noteLabels",
    data:  JSON.stringify(labelCreate), 
    type: "POST",
      headers: {
         'Authorization': localStorage.getItem('token')
       },
        contentType: "application/json;charset=utf-8",
        success: function (result) 
        {
          console.log("success");
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
        },
        error: function (errorMessage)
        {
         console.log("Error", errorMessage);
        }
      });
    });   

/******** get all label **********************************/ 
var labels=[];

$(document).ready(function(){
   $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/getNoteLabelList",
      type: "GET",
      headers: { 'Authorization': localStorage.getItem('token') },
            
      success: function(result){
      console.log("success in  labels");
      labels=result.data.details;
      console.log("labels = ",labels);
      
      }
      ,
        error: function (errorMessage)
        {
         console.log("failed");
         console.log("Error", errorMessage);
        }
    });
   });
 
