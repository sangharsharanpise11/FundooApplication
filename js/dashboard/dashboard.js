

/************************* match media **********************************************************************/ 
// document.addEventListener('DOMContentLoaded',init);
//   function init(){
//   
//   }

document.addEventListener('DOMContentLoaded',init);
  function init(){
  var largeSize = window.matchMedia('(min-width:769px) and (max-width:1024px)');
  var largestSize = window.matchMedia('(min-width:1025px) and (max-width:1440px)');
  var bigSize = window.matchMedia('(min-width:1441px)');
  
  var mobile = window.matchMedia('(max-width:320px) ');
  var longMobile = window.matchMedia('(min-width:321px) and (max-width:425px)' )
  var tablet = window.matchMedia('(min-width:426px) and (max-width:768px)');
  if(tablet.matches){
    var clicked;
    $("#openNav").click(function(){
    if(clicked != true )
     {
      $(".w3-sidebar").toggle();
      $("#a1, #a2").css("margin-left", "160px");
      $("#display").css("margin-left","5%");
      $(".data").css("margin-left","25%");
      $("#pinnedNotes, #unpinNotes").css({"display": "flex","flex-direction": "row","flex-wrap": "wrap","align-items": "flex-start","place-content": "initial","justify-content": "center","width": "600px","margin-left": "15px"});
      $("#flip").click(function(){
          $(".createNote").css({"background-color": "white","width": "519px","border-radius": "5px","box-shadow": "0 4px 11px rgba(0,0,0,0.20)","display": "grid","grid-row-gap": "15px","margin-top": "35px","margin-left": "103px","height": "190px"});
          $("#closeCreateNote").css({"color": "rgb(0, 0, 0)","margin-top": "-75px","font-size": "20px","margin-left": "430px"}) 
          $(".createNote .noteIcon").css({"padding-right": "10px","margin-top": "17px","display": "flex","margin-left": "-25px","margin-right": "265px"});

        })
      $(".threeIcons").css({"list-style-type": "none","display": "flex","font-size": "22px !important","justify-content": "space-between","width": "115px","margin-top": "32px","margin-left": "265px"});
     // $(".createNote").css({"background-color": "white","width": "519px","border-radius": "5px","box-shadow": "0 4px 11px rgba(0,0,0,0.20)","display": "grid","grid-row-gap": "15px","margin-top": "35px","margin-left": "103px","height": "190px"});
      $(".createNote .noteIcon").css({"padding-right": "10px","margin-top": "-20px","display": "flex","margin-left": "-25px","margin-right": "265px"});
      $("#closeCreateNote").css({"color": "black","margin-top": "-144px","font-size": "20px","margin-left": "430px"})
      $("#desc").css({"margin-top":"-25px"})
      $("#unpincreateNote").css({"margin-left": "480px"})
      $(".middleIcon").click(function(){//    width: 523px;  margin-left: 43px;
        
         $(".midIcon").html('<i class="material-icons gridView" style="margin-top: 1px;font-size:36px">widgets</i>');
         $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "490px","margin-top": "10px","z-index": "1"})
        $(".card").css({"width": "523px"," margin-left": "43px"})
      })
      
      $(".gridView").click(function(){
      console.log("in grid view");
        $(".card").css({"width": "320px","height":"fit-content","margin":"5px","border-radius":"15px","margin-left": "15px"})
        $("#unpincreateNote").css({"margin-left": "22px","z-index": "1","margin-top": "2px"})
        $("#a1, #a2").css({"margin-left": "140px"})
       // $(".noteIcon").css({"padding-right": "-1px","margin-top": "0px","display": "flex"})
        $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "255px","margin-top": "10px","z-index": "1"})
        $("#flip").click(function(){
          $(".createNote .noteIcon").css({"padding-right": "10px","margin-top": "-5px","display": "flex","margin-left": "-25px","margin-right": "355px"});
        })
      })
    }
   });
   $(".middleIcon").click(function(){
    console.log("**********");
    $(".midIcon").html('<i class="material-icons gridView" style="margin-top: 1px;font-size:36px">widgets</i>');
    $(".card").css({"width": "600px"})
    $(".card #unpincreateNote").css({"margin-left":"295px","margin-top": "2px","width": "25px","height": "22px","z-index": "1"})
    // $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "565px","margin-top": "10px","z-index": "1"})
    $("footer .noteIcon").css({"margin-top": "7px","display": "flex","margin-left": "20px","margin-right": "250px","margin-bottom": "-10px","margin": "2px 250px -10px -9px"});
  }) 

  $(document).on("click" , ".gridView" , function(e) { 
    console.log("in grid view");
    $(".midIcon").html('<i class="material-icons middleIcon">view_stream</i>');
    $(".card").css({"width": "320px","height":"fit-content","margin":"5px","border-radius":"6px","margin-left": "15px"})
    $("#a1, #a2").css({"margin-left": "140px"})
    $(".createNote .noteIcon").css({"display": "flex","padding": "0px","pointer-events": "auto","margin": "10px","margin-left": "1","margin-right": "230px"})
    $(".noteIcon").css({"display": "flex","padding": "0","pointer-events": "auto","margin": "0"});
    $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "255px","margin-top": "10px","z-index": "1"})
   });
}
    else if(mobile.matches){
      console.log("its matching");
      
      var clicked;
      $("#openNav").click(function(){
      if(clicked != true )
       {
        $(".w3-sidebar").toggle();
       }
      });
    }

    else if(longMobile.matches){
      console.log("its matching");
      
      var clicked;
      $("#openNav").click(function(){
      if(clicked != true )
       {
        $(".w3-sidebar").toggle();
        $("createNote").css({"display": "block","background-color": "rgb(255, 255, 255)","width": "675px","border-radius": "5px","box-shadow": "rgba(0, 0, 0, 0.2) 0px 4px 11px","row-gap": "15px","margin-top": "35px","margin-left": "-90px","height": "254px"});
       }
      });
    }

    else if(largeSize.matches){
      console.log("its matching");
      
      var clicked;
      $("#openNav").click(function(){
      if(clicked != true )
       {
        $(".w3-sidebar").toggle();
        $(".data").css("margin-left", "358px");
        $("#flip").css({"display": "flex","padding": "5px","text-align": "left","background-color": "white","border-radius": "5px","justify-content": "space-between","height": "50px","margin-top": "-140px","box-shadow": "inset 2px 2px 0 rgba(0,0,0,.1), inset 0 -1px 0 rgba(0,0,0,.07)","background-clip": "padding-box","border": "solid transparent","border-width": "1px 2px 1px 2px","width": "600px","border-color":"lightgrey","margin-left": "-40px"});
       // $(".createNote").css({"display": "flex","padding": "0px","pointer-events": "auto","margin": "10px","margin-left": "1","margin-right": "230px"})
      }
      });
      $(".middleIcon").click(function(){
        console.log("**********");
        $(".midIcon").html('<i class="material-icons gridView" style="margin-top: 1px;font-size:36px">widgets</i>');
        $(".card").css({"width": "600px"})
       
        $(".card #unpincreateNote").css({"margin-left":"295px","margin-top": "2px","width": "25px","height": "22px","z-index": "1"})
       
        $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "565px","margin-top": "10px","z-index": "1"})
        $("footer .noteIcon").css({"margin-top": "7px","display": "flex","margin-left": "20px","margin-right": "250px","margin-bottom": "-10px","margin": "2px 250px -10px -9px"});
      }) 
    
      $(document).on("click" , ".gridView" , function(e) { 
        console.log("in grid view");
        $(".midIcon").html('<i class="material-icons middleIcon">view_stream</i>');
        $(".card").css({"width": "320px","height":"fit-content","margin":"5px","border-radius":"10px","margin-left": "15px"})
        $("#a1, #a2").css({"margin-left": "140px"})
       
        $(".card #unpincreateNote").css({"margin-left": "20px","z-index": "1","margin-top": "2px","width": "25px","height": "22px"})
       
        $("#closeCreateNote").css({"color": "black","margin-top": "-45px","float": "right"})
        $(".noteIcon").css({"display": "flex","padding": "0","pointer-events": "auto","margin": "0"});
        $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "255px","margin-top": "10px","z-index": "1"})
        $(".createNote").css({"margin-left": "-35px"}) 
        $(".createNote .noteIcon").css({"display": "flex","padding": "0px","pointer-events": "auto","margin": "10px","margin-left": "1","margin-right": "230px"})
      });
    }

    else if(largestSize.matches){
      console.log("its matching");
      
      var clicked;
      $("#openNav").click(function(){
      if(clicked != true )
       {
        $(".w3-sidebar").toggle();
        $("#display").css("margin-left", "82px");
        
        $(".middleIcon").click(function(){
          console.log("**********");
          $(".flip").css({"margin-left": "355px"})
          $(".createNote").css({"margin-left": "305px"})
          $(".midIcon").html('<i class="material-icons gridView" style="margin-top: 1px;font-size:36px">widgets</i>');
          $(".card").css({"width": "600px"})
          $(".createNote #unpincreateNote").css({"margin-right": "37px","margin-left": "150px","width": "25px","z-index":"1","height": "22px","margin-left":"150px","margin-top": "-5px"})
          $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "565px","margin-top": "10px","z-index": "1"})
          $("footer .noteIcon").css({"margin-top": "7px","display": "flex","margin-left": "20px","margin-right": "250px","margin-bottom": "-10px","margin": "2px 250px -10px -9px"});
        })        }
      });
      $(".middleIcon").click(function(){
        console.log("**********");
        $(".flip").css({"margin-left": "355px"})
        $(".createNote").css({"margin-left": "305px"})
        $(".midIcon").html('<i class="material-icons gridView" style="margin-top: 1px;font-size:36px">widgets</i>');
        $(".card").css({"width": "600px"})
        $(".card #unpincreateNote").css({"margin-left": "348px","width": "25px","z-index": "1","height": "22px","margin-top": "5px"})
        $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "565px","margin-top": "10px","z-index": "1"})
        $("footer .noteIcon").css({"margin-top": "7px","display": "flex","margin-left": "20px","margin-right": "250px","margin-bottom": "-10px","margin": "2px 250px -10px -9px"});
      }) 
      
    
      $(document).on("click" , ".gridView" , function(e) { 
        console.log("in grid view");
        $(".midIcon").html('<i class="material-icons middleIcon">view_stream</i>');
        $(".card").css({"width": "290px","height":"fit-content","margin":"5px","border-radius":"10px","margin-left": "15px"})
        $(".card #unpincreateNote").css({"margin-left": "34px","margin-top": "5px","z-index":"1","width": "25px","height": "22px"}) 
        $("#a1, #a2").css({"margin-left": "140px"})
        $("#closeCreateNote").css({"color": "black","margin-top": "-45px","float": "right"})
        $(".noteIcon").css({"display": "flex","padding": "0","pointer-events": "auto","margin": "0"});
        $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "255px","margin-top": "10px","z-index": "1"})
        $(".createNote").css({"margin-left": "250px"}) 
        $(".createNote #unpincreateNote").css({"margin-right": "37px","margin-left": "150px","width": "25px","z-index":"1","height": "22px","margin-left":"150px","margin-top": "-5px"})
        $(".createNote .noteIcon").css({"display": "flex","padding": "0px","pointer-events": "auto","margin": "10px","margin-left": "1","margin-right": "230px"})
      });
      $(".createNote").css({"margin-left": "250px"}) 
      $(".createNote #unpincreateNote").css({"margin-right": "37px","margin-left": "150px","width": "25px","z-index":"1","height": "22px","margin-left":"150px","margin-top": "-5px"})
     
    }

    else if(bigSize.matches){
      console.log("its matching");
      
      var clicked;
      $("#openNav").click(function(){
      if(clicked != true )
       {
        $(".w3-sidebar").toggle();
        //$("createNote").css({"display": "block","background-color": "rgb(255, 255, 255)","width": "675px","border-radius": "5px","box-shadow": "rgba(0, 0, 0, 0.2) 0px 4px 11px","row-gap": "15px","margin-top": "35px","margin-left": "-90px","height": "254px"});
       }
      });

      $(".middleIcon").click(function(){
        console.log("******  in big screen ****");
        $(".flip").css({"margin-left": "355px"})
        $(".createNote").css({"margin-left": "260px"})
        $(".tite, .desc").css({"width":"360px"})
        $(".midIcon").html('<i class="material-icons gridView" style="margin-top: 1px;font-size:36px">widgets</i>');
        $(".card").css({"width": "600px","margin": "5px","border-radius": "6px","pointer-events": "auto","margin-left": "15px","height": "fit-content"})
        $(".card #unpincreateNote").css({"margin-left": "185px","margin-top":"-5px","width":"25px","height":"22px","z-index":"1"})
        $("footer .noteIcon").css({"margin-top": "7px","display": "flex","margin-left": "20px","margin-right": "250px","margin-bottom": "-10px","margin": "2px 250px -10px -9px"});
      }) 
    
      $(document).on("click" , ".gridView" , function(e) { 
        console.log("in grid view");
        //location.reload(true);
        $(".midIcon").html('<i class="material-icons middleIcon">view_stream</i>');
        $(".card").css({"width": "290px","height":"fit-content","margin":"5px","border-radius":"10px","margin-left": "15px","pointer-events":"auto"})
        $("#a1, #a2").css({"margin-left": "140px"})
        $(".noteIcon").css({"display": "flex","padding": "0","pointer-events": "auto","margin": "0"});
        $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "255px","margin-top": "10px","z-index": "1"})
        $(".createNote").css({"margin-left": "270px"}) 
        $(".card #unpincreateNote").css({"margin-left": "-121px","margin-top":"0px","width": "25px","height": "22px","z-index":"1"})
        $("#closeCreateNote").css({"color": "black","margin-top": "-44px","float": "right","margin-right": "-155px"})
        $(".createNote .noteIcon").css({"display": "flex","padding": "0px","pointer-events": "auto","margin": "10px","margin-left": "1","margin-right": "230px"})
        $("#pinnedNotes, #unpinNotes").css({"margin-left": "80px"})
      });
      $(".createNote").css({"margin-left": "250px"}) 
      $(".createNote #unpincreateNote").css({"margin-right": "37px","margin-left": "150px","width": "25px","z-index":"1","height": "22px","margin-left":"150px","margin-top": "-5px"})

    }
    else{
      console.log("nothing to match");
      
    }
}
/*********** grid view list ******************************************/ 
// $(document).on("click" , ".middleIcon" , function(e) { 
//   console.log("in midleicon");
//   $(".midIcon").html('<i class="material-icons gridView" style="margin-top: 1px;font-size:36px">widgets</i>');

//   $(".card").css({"width": "600px"})
//   $("#a1, #a2").css({"margin-left": "255px"})
//   $(".createNote").css({"width":"195px","background-color":"white","width": "680px","border-radius": "5px","grid-row-gap": "15px","margin-top":"30px","margin-left": "305px","height": "195px","box-shadow": "0 4px 11px rgba(0,0,0,0.20)"});
//   $(".noteIcon").css({"padding-right": "-9px","margin-top": "2px","display": "flex","margin-left": "-9px"})
//   $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "565px","margin-top": "10px","z-index": "1"})
// });


// $(document).on("click" , ".gridView" , function(e) { 
//   console.log("in grid view");
//   $(".midIcon").html('<i class="material-icons middleIcon">view_stream</i>');

//   $(".card").css({"width": "320px","height":"fit-content","margin":"5px","border-radius":"6px","margin-left": "15px"})
//   $("#a1, #a2").css({"margin-left": "140px"})
//   $(".noteIcon").css({"padding-right": "-1px","margin-top": "0px","display": "flex"})
//   $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "255px","margin-top": "10px","z-index": "1"})
//   var resWidth = screen.width
// });

$(document).ready(function(){
  $("#note").click(function(){
      $(".createNote").css("display","block")
    $("#note").css("display","none");
    $("#a1").css("margin-top","60px")
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
      // $("#title").css("border-bottom","2px solid #34F458");
    } else {
       $("#title_error_message").html("Invalid title");
       $("#title_error_message").show();
      // $("#title").css("border-bottom","2px solid #F90A0A");
       error_title = true;
    }
 }

function check_desc() {
  var pattern = /^[a-zA-Z ]*$/;
  var desc = $("#desc").val()
  if (pattern.test(desc) && desc !== '') 
  {
    $("#desc_error_message").hide();
   // $("#title").css("border-bottom","2px solid #34F458");
  } else {
    $("#desc_error_message").html("Invalid description");
    $("#desc_error_message").show();
  //  $("#desc").css("border-bottom","2px solid #F90A0A");
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
   
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
      resetForm();
      location.reload(true);
      },
      error: function (errorMessage) {
      console.log("Error", errorMessage);
     
      }
   })
    return true;
 } else {
   $('#closeCreateNote').hide();
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
        // $("#title").css("border-bottom","2px solid #34F458");
      } else {
         $("#title_error_message").html("Invalid title");
         $("#title_error_message").show();
        // $("#title").css("border-bottom","2px solid #F90A0A");
         error_title = true;
      }
   }
  
  function check_desc() {
    var pattern = /^[a-zA-Z ]*$/;
    var desc = $("#desc").val()
    if (pattern.test(desc) && desc !== '') 
    {
      $("#desc_error_message").hide();
     // $("#title").css("border-bottom","2px solid #34F458");
    } else {
      $("#desc_error_message").html("Invalid description");
      $("#desc_error_message").show();
     // $("#desc").css("border-bottom","2px solid #F90A0A");
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

         /** PIN ****/  
       var wrapper = document.getElementById("pinnedNotes");
       var id = document.getElementById("id");
    
       var currentDateTime=new Date();
       var currentDateTime=currentDateTime.getDate()+"/"+(currentDateTime.getMonth()+1)+"/"+currentDateTime.getFullYear()+" "+currentDateTime.getHours()+":"+currentDateTime.getMinutes();
       console.log("*** ",currentDateTime);

       var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
       var now       = new Date();
       var thisMonth = months[now.getMonth()];
       var output = document.getElementById('output');
       console.log(thisMonth); 

       var myHTML = ''; 
      //  var newRemDate;
       for (var i = 0; i < notes.length; i++)
        {
          //console.log("HERE WE GO : ",notes[i].label);
          
          var newRemDate=new Date(notes[i].reminder);
          newReminderDate=thisMonth+" "+newRemDate.getDate()+","+newRemDate.getHours()+":"+newRemDate.getMinutes();
          
          var labelName=notes[i].noteLabels;
          console.log("*** LabelName = ",labelName);
          
          if(notes[i].isPined === true && notes[i].isArchived === false && notes[i].reminder.length > 0  &&  notes[i].isDeleted === false)
          {
            myHTML +='<div style=background-color:'+notes[i].color+' class="card" id='+[i]+'><div class="card-body"><div class="info" data-toggle="modal" data-target="#myModal" style="color: black;"><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span><img src="/images/pinNew.svg" id="unpincreateNote" value="Click me"></div><div id="desc" class="desc" style="margin-top: 10px;"><span class="descr">'+notes[i].description+'</span></div></div><div class="remAndLabel"><button class="button remainderTime" id="remainderTime"><div class="clkRem"><i class="far fa-clock" style="color:grey;"></i><span id="dateAndTime">'+newReminderDate+'</span></div><i class="material-icons" role="button" id="deleteReminder">cancel</i></button><div class="labelName" id="labelName"></div></div><footer><ul class="noteIcon" ><li class="icon-item"><img src="/images/remNew.svg"  id="remainder"  data-toggle="modal" data-target="#myRemindModal"></i></li><li class="icon-item"><img src="/images/addNew.svg" id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal"></i></li> <li class="icon-item dropdown"><img src="/images/colorNew.svg" class="dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color" value="#FF1493"  style="background-color: #FF1493;"></div></li><li><div href="#" class="color"  value="#FFB6C1" style="background-color: #FFB6C1;"></div></li><li><div href="#" class="color"  value="#FAEBD7" style="background-color: #FAEBD7;"></div></li><li><div href="#" class="color" value="#FFE4E1" style="background-color: #FFE4E1;"></div></li><li><div href="#" class="color"  value="#F5FFFA" style="background-color: #F5FFFA"></div></li><li><div href="#" class="color"  value="#87CEEB" style="background-color: #87CEEB;"></div></li><li><div href="#" class="color"   value="#FA8072" style="background-color: #FA8072;"></div></li><li><div href="#" class="color"  value="#E0FFFF" style="background-color:#E0FFFF ;"></div></li><li><div href="#" class="color" value="#FFEFD5" style="background-color: #FFEFD5;"></div></li></ul></li></li><li class="icon-item"><img src="/images/imgNew.svg"  id="image"></i></li><li class="icon-item" id="archieveNote"><img src="/images/archiveNew.svg" class="archive"></i></li><li class="icon-item dropdown" ><img src="/images/moreNew.svg" role="button" data-toggle="dropdown"  id="moreIcon"></i><ul class="dropdown-menu lastDropdown" id="moreData" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item popup" onclick="myFunction()" id="addLabel">Add label</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></footer></div></div></div>';
          }
         else if(notes[i].isPined === true && notes[i].isArchived === false && notes[i].reminder.length === 0  &&  notes[i].isDeleted === false)
          {
            myHTML +='<div style=background-color:'+notes[i].color+' class="card" id='+[i]+'><div class="card-body"><div class="info" data-toggle="modal" data-target="#myModal" style="color: black; "><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span><img src="/images/pinNew.svg" id="unpincreateNote" value="Click me"></div><div id="desc" class="desc" style="margin-top: 10px;"><span class="descr">'+notes[i].description+'</span></div></div><div class="remAndLabel"></div><footer><ul class="noteIcon" ><li class="icon-item"><img src="/images/remNew.svg"  id="remainder"  data-toggle="modal" data-target="#myRemindModal"></i></li><li class="icon-item"><img src="/images/addNew.svg" id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal"></i></li> <li class="icon-item dropdown"><img src="/images/colorNew.svg" class="dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color" value="#FF1493"  style="background-color: #FF1493;"></div></li><li><div href="#" class="color"  value="#FFB6C1" style="background-color: #FFB6C1;"></div></li><li><div href="#" class="color"  value="#FAEBD7" style="background-color: #FAEBD7;"></div></li><li><div href="#" class="color" value="#FFE4E1" style="background-color: #FFE4E1;"></div></li><li><div href="#" class="color"  value="#F5FFFA" style="background-color: #F5FFFA"></div></li><li><div href="#" class="color"  value="#87CEEB" style="background-color: #87CEEB;"></div></li><li><div href="#" class="color"   value="#FA8072" style="background-color: #FA8072;"></div></li><li><div href="#" class="color"  value="#E0FFFF" style="background-color:#E0FFFF ;"></div></li><li><div href="#" class="color" value="#FFEFD5" style="background-color: #FFEFD5;"></div></li></ul></li></li><li class="icon-item"><img src="/images/imgNew.svg"  id="image"></i></li><li class="icon-item" id="archieveNote"><img src="/images/archiveNew.svg" class="archive"></i></li><li class="icon-item dropdown" ><img src="/images/moreNew.svg" role="button" data-toggle="dropdown"  id="moreIcon"></i><ul class="dropdown-menu lastDropdown" id="moreData" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item popup" onclick="myFunction()" id="addLabel">Add label</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></footer></div></div></div>';
          }
          else{
            console.log("nothing to display");
          }
      }
         wrapper.innerHTML = myHTML

        /** UNPIN ****/  
       var wrapper = document.getElementById("unpinNotes");
       var id = document.getElementById("id");
    
       var myHTML = ''; 
       for (var i = 0; i < notes.length; i++)
        {  
          var newRemDate=new Date(notes[i].reminder);
          newReminderDate=thisMonth+" "+newRemDate.getDate()+","+newRemDate.getHours()+":"+newRemDate.getMinutes();
         
          var labelName=notes[i].noteLabels;

          if(notes[i].isPined === false && notes[i].isArchived === false && notes[i].reminder.length > 0 &&  notes[i].isDeleted === false)
          {
            myHTML +='<div style=background-color:'+notes[i].color+' class="card" id='+[i]+'><div class="card-body"><div class="info" data-toggle="modal" data-target="#myModal" style="color: black; "><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span><img src="/images/unPinNew.svg" id="unpincreateNote" value="Click me"></div><div id="desc" class="desc" style="margin-top: 10px;"><span class="descr">'+notes[i].description+'</span></div></div><div class="remAndLabel"><button class="button remainderTime" id="remainderTime"><i class="far fa-clock" style="color:grey;"></i><span id="dateAndTime">'+newReminderDate+'</span><i class="material-icons" role="button" id="deleteReminder">cancel</i></button><div class="labelName" id="labelName"></div></div><footer><ul class="noteIcon" ><li class="icon-item"><img src="/images/remNew.svg"  id="remainder"  data-toggle="modal" data-target="#myRemindModal"></i></li><li class="icon-item"><img src="/images/addNew.svg" id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal"></i></li> <li class="icon-item dropdown"><img src="/images/colorNew.svg" class="dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color" value="#FF1493"  style="background-color: #FF1493;"></div></li><li><div href="#" class="color"  value="#FFB6C1" style="background-color: #FFB6C1;"></div></li><li><div href="#" class="color"  value="#FAEBD7" style="background-color: #FAEBD7;"></div></li><li><div href="#" class="color" value="#FFE4E1" style="background-color: #FFE4E1;"></div></li><li><div href="#" class="color"  value="#F5FFFA" style="background-color: #F5FFFA"></div></li><li><div href="#" class="color"  value="#87CEEB" style="background-color: #87CEEB;"></div></li><li><div href="#" class="color"   value="#FA8072" style="background-color: #FA8072;"></div></li><li><div href="#" class="color"  value="#E0FFFF" style="background-color:#E0FFFF ;"></div></li><li><div href="#" class="color" value="#FFEFD5" style="background-color: #FFEFD5;"></div></li></ul></li></li><li class="icon-item"><img src="/images/imgNew.svg"  id="image"></i></li><li class="icon-item" id="archieveNote"><img src="/images/archiveNew.svg" class="archive"></i></li><li class="icon-item dropdown" ><img src="/images/moreNew.svg" role="button" data-toggle="dropdown"  id="moreIcon"></i><ul class="dropdown-menu lastDropdown" id="moreData" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item popup" onclick="myFunction()" id="addLabel">Add label</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></footer></div></div></div>';
          }
          else if(notes[i].isPined === false && notes[i].isArchived === false && notes[i].reminder.length === 0 &&  notes[i].isDeleted === false)
          {
           myHTML +='<div style=background-color:'+notes[i].color+' class="card" id='+[i]+'><div class="card-body"><div class="info" data-toggle="modal" data-target="#myModal" style="color: black; "><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span><img src="/images/unPinNew.svg" id="unpincreateNote" value="Click me"></div><div id="desc" class="desc" style="margin-top: 10px;"><span class="descr">'+notes[i].description+'</span></div></div><div class="remAndLabel"></div><footer><ul class="noteIcon" ><li class="icon-item"><img src="/images/remNew.svg" id="remainder"  data-toggle="modal" data-target="#myRemindModal"></i></li><li class="icon-item"><img src="/images/addNew.svg"  id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal"></i></li> <li class="icon-item dropdown"><img src="/images/colorNew.svg" class="dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color" value="#FF1493"  style="background-color: #FF1493;"></div></li><li><div href="#" class="color"  value="#FFB6C1" style="background-color: #FFB6C1;"></div></li><li><div href="#" class="color"  value="#FAEBD7" style="background-color: #FAEBD7;"></div></li><li><div href="#" class="color" value="#FFE4E1" style="background-color: #FFE4E1;"></div></li><li><div href="#" class="color"  value="#F5FFFA" style="background-color: #F5FFFA"></div></li><li><div href="#" class="color"  value="#87CEEB" style="background-color: #87CEEB;"></div></li><li><div href="#" class="color"   value="#FA8072" style="background-color: #FA8072;"></div></li><li><div href="#" class="color"  value="#E0FFFF" style="background-color:#E0FFFF ;"></div></li><li><div href="#" class="color" value="#FFEFD5" style="background-color: #FFEFD5;"></div></li></ul></li></li><li class="icon-item"><img src="/images/imgNew.svg" id="image"></i></li><li class="icon-item" id="archieveNote"><img src="/images/archiveNew.svg" class="archive"></i></li><li class="icon-item dropdown" ><img src="/images/moreNew.svg" role="button" data-toggle="dropdown"  id="moreIcon"></i><ul class="dropdown-menu lastDropdown" id="moreData" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item  popup" onclick="myFunction()" id="addLabel">Add Label</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></footer></div></div></div>';
          }
          else{
            console.log("nothing to display");
          }

      }
         wrapper.innerHTML = myHTML
      }});
   });

/*********************** update note ************************************************************************/

$(document).ready(function () {
  $(document).on("click" , "#desc" , function(e) { 
    // $('#myModal').toggle();

    noteId=$(this).closest('div.card').attr('id'); 
    noteColor=$(this).closest('div.card').css('background-color'); 
    note=$(this).closest('div.card').reminder; 
    
    data = notes[noteId].id;
    console.log("noteid is :",data);
    console.log("data is :",notes[noteId]);
    console.log("note color ",noteColor);
  
    $('.updateTitle').val(notes[noteId].title);
    $('.updateDesc').val(notes[noteId].description);
    $('.updateContent').css({"background-color": noteColor});
       
    function insrt(color) {
      console.log('color is ',color);
      createColor=color;
      $('.modal-content').css({"background-color": color});// $('#colorList').val());
    }
    
      $(document).on("click" , "#reminderData" , function(e) { 
        console.log("hiii");
        date=$('#reminderDate').val();
        console.log("date is",date);
      });
    
      // $(document).on("click" , "#unpinUpdateNote" , function(e) { 
      //   value=true;
      //    console.log("isPined ",value);
      //   }); 
    
      // $(document).on("click" , "#archieveUpdateNote" , function(e) { 
      //     value=true;
      //     console.log("isArchived ",value);
      // });   
        
        var pinClicked;
      $("#unpinUpdateNote").click(function(){
      if( pinClicked!= true )
       {
        pinClicked= true;
       }
       else{
        console.log("Button was clicked before");
       }
      });             
         
      var archiveClicked;
    $("#archieveUpdateNote").click(function(){
    if( archiveClicked!= true ) {
      archiveClicked= true;
      }
      else{
       console.log("Button was clicked before");
      }
    });
         
       
       
       
        $("#updateData").click(function(){
          
          const updateNoteData={
            title:$('#title').val(),
            description:$('#desc').val(),
             isPined:pinClicked,
             isArchived:archiveClicked,
            color:createColor,
            reminder : $('#reminderDate').val()
    
          } 
          console.log("createNoteObject =>  ",updateNoteData);
    
          
          // const updateNoteData={
          //    title:$('.updateTitle').val(),
          //    description:$('.updateDesc').val(),
          //    noteId : data
          //  };
           const formBody = [];
           for (const property in updateNoteData) {
             const encodedKey = encodeURIComponent(property);
             const encodedValue = encodeURIComponent(updateNoteData[property]);
             formBody.push(encodedKey + '=' + encodedValue);
           }
         console.log("updateNoteData => ",updateNoteData);
       
       
       if ( updateNoteData != notes[noteId] )
       {
          var token= localStorage.getItem("token");
          console.log("token =>",token);
          console.log("notes data ",updateNoteData);
          
          console.log(  "title = > ",$('.updateTitle').val(),+" "+"description = > ",$('.updateDesc').val(),+" "+"noteId = >" , data);
          
          $.ajax({
           url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",
          data:  formBody.join('&') ,  
           type: "POST",
           headers: {
              'Authorization': localStorage.getItem('token')
              },
           //contentType: "application/json;",
           'Content-Type': 'application/x-www-form-urlencoded',

           success: function (result) {
           console.log("note update result ==>", result);
       
            
             console.log("id============>", result.id);
             resetForm();
             location.reload(true);       },
             error: function (errorMessage) {
             console.log("Error", errorMessage);
             }
          })
          
        } else {
          location.reload(true);
          }
       });
       });
   });
});


// /********************* delete note **********************************************************/ 
$(document).on("click" , "#deleteNote" , function(e) { 
    
    noteId=$(this).closest('div.card').attr('id');   
    data = notes[noteId].id;
    console.log("noteid is :",data);
    
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
        notesid=result.data.id;
      console.log("note delete result ==>", notesid);
     
       
        console.log("id============>", result.id);
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
        location.reload(true);
        },     
      });
    });
 
/******************** archieve note **********************************************************/ 
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
        location.reload(true);
       },
        error: function (errorMessage) {
        console.log("Error", errorMessage);
        }
     });
  });

  /******************** unArchive note **********************************************************/ 
  $(document).on("click" , "#unArchieveNote" , function(e) { 
    noteId=$(this).closest('div.card').attr('id');  
    data = notes[noteId].id;

    var x = document.getElementById("snackbarunArchive")
    // Add the "show" class to DIV
    x.className = "show";
 
    $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",
      data:  JSON.stringify({
        "isArchived" : false, 
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
        location.reload(true);
         },
        error: function (errorMessage) {
        console.log("Error", errorMessage);
        }
     });
  });

  /********************* pin note **********************************************************/ 
  $(document).on("click" , "#pin" , function(e) { 
    
    noteId=$(this).closest('div.card').attr('id');
    data = notes[noteId].id;
    console.log(data);
    
    var x = document.getElementById("snackbarunPin")
    // Add the "show" class to DIV
    x.className = "show";

      $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/pinUnpinNotes",
      data:  JSON.stringify({
        "isPined" : false, 
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
        location.reload(true);
        },
        error: function (errorMessage) {
        console.log("Error", errorMessage);
        }
     });
  });
 /********************* unpin note **********************************************************/ 
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
      location.reload(true);
      },
      error: function (errorMessage) {
      console.log("Error", errorMessage);
      }
   });
});
  /******************color to note**********************************************************************/ 
   function insert(color) {
     console.log("in insert",noteId);
     $('.card').css("background-color",color);
  }

  $(document).on("click" , "#colors" , function(e) { 
    console.log("in color ajax");
    
    noteId=$(this).closest('div.card').attr('id');
       
    data = notes[noteId].id;
    console.log("note id is :",data);

    $(document).on("click" , "#colorList .color" , function(e) { 
      color=$(this).attr('value');
      console.log("color is :",color);

     // $('#'+ noteId),closest('div .card').css({"background-color":color});
      var x = document.getElementById("snackbarColor")
      
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
        $('#noteId').closest('div.card').css("background-color",color);

           // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
        location.reload(true);
      },
        error: function (errorMessage) {
        console.log("Error", errorMessage);
        }
     });
  });
});

/**************** delete reminder ***************************************************/
$(document).on("click" , "#deleteReminder" , function(e) { 
  console.log("in delete reminder ");
  
  noteId=$(this).closest('div.card').attr('id');
  data = notes[noteId].id;
  console.log("data is :",data);
  
  var x = document.getElementById("snackbarReminderDeleted")
  x.className = "show";

  $.ajax({
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/removeReminderNotes",
    data:  JSON.stringify({"noteIdList" : [data] }), 
    type: "POST",
      headers: {
         'Authorization': localStorage.getItem('token')
       },
        contentType: "application/json;charset=utf-8",
        success: function (result) 
        {
          console.log("success");
          $('#remainderTime').hide();
          // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
          // location.reload(true);
        },
        error: function (errorMessage)
        {
         console.log("Error", errorMessage);
        }
     });
});


/**************** remainder note *********************************/ 
  $(function () {
    console.log("in datetimepicker");
    $('#datetimepicker1').datetimepicker();
  });

     $(document).on("click" , "#remainder" , function(e) { 
     console.log("in reminder ");
     
    var currentDateTime=new Date();
    var currentDateTime=currentDateTime.getDate()+"/"+(currentDateTime.getMonth()+1)+"/"+currentDateTime.getFullYear()+" "+currentDateTime.getHours()+":"+currentDateTime.getMinutes();
    console.log("*** ",currentDateTime);

     noteId=$(this).closest('div.card').attr('id');
     data = notes[noteId].id;
     console.log("data is :",data);
     localStorage.setItem("noteid",data);
    
      $(document).on("click" , "#reminderData" , function(e) { 
        console.log("hiii");
        var date=$('#reminderDate').val();
        console.log("date is",date);
        
        document.getElementById("dateAndTime").innerHTML =date;

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
                  location.reload(true);
                },
                error: function (errorMessage)
                {
                 console.log("Error", errorMessage);
                }
             });
      });


      $(function() {
        var variable;
        $("#today").selectable({
            selected: function( event, ui ) { 
                variable = $('.ui-selected').text(); 
                console.log(variable);

                 
              var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
              var now       = new Date();
              var thisMonth = months[now.getMonth()];
              var output = document.getElementById('output');
              console.log(thisMonth);

              var remindData;
              var today = new Date();
               console.log("today => ",today);
               var date =today.getDate();
               console.log("date => ",date);
               var time = today.getHours() + ":" + today.getMinutes() ;
               console.log("time => ",time);

                var x = document.getElementById("snackbarReminder")
                x.className = "show";
        
                var todayDate = today.getDate()+","+today.getHours()+":"+today.getMinutes();

                if(variable === "Tomarrow 8:00 PM")
                {     
                  var tomarrow =  new Date();
                  tomarrow.setDate(tomarrow.getDate()+1);
                  console.log("tom date = > ",tomarrow.getDate()+","+tomarrow.getHours()+":"+tomarrow.getMinutes());
                
                  $.ajax({

                    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/addUpdateReminderNotes",
                    data:  JSON.stringify({
                      "reminder" : tomarrow,
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
                          //location.reload(true);
                        },
                        error: function (errorMessage)
                        {
                         console.log("Error", errorMessage);
                        }
                    });
                }
                else{
                  var today =  new Date();
                  var today=today.toString();
                 console.log("today = ",today);
                 
                $.ajax({
                    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/addUpdateReminderNotes",
                    data:  JSON.stringify({
                      "reminder" : today,
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
                          //location.reload(true);
                        },
                        error: function (errorMessage)
                        {
                         console.log("Error", errorMessage);
                        }
                    });
                }
            }
        });
      });
     });
     
/**************************************** collaborator note ***********************************************************************/ 
firstName=localStorage.getItem('firstName');
lastName=localStorage.getItem('lastName');
email=localStorage.getItem('email');
fullName=lastName+" "+firstName;
localStorage.setItem("fullName",fullName);

document.getElementById("ownerFullName").innerHTML = fullName;
document.getElementById("ownerEmailData").innerHTML = email;
console.log(fullName, "  " ,email);

$(document).on("click","#collabSaveBtn",function(e){
location.reload(true);
})

$(document).on("click","#collabCancelBtn",function(e){
  location.reload(true);
})

$(document).on("click" , "#collaborator" , function(e) { 
  console.log("in collaborator ");

  noteId=$(this).closest('div.card').attr('id');
  console.log("noteId",noteId);
  var data = notes[noteId].id;
  console.log("data is :",data);

  var users=[];

  $("#newPerson").keyup(function (){
    console.log("in keyup");
    
    var searchUser={
      searchWord :$("#newPerson").val()
    }
    console.log("@",$("#newPerson").val)

    /*************************** search userlist *****************************************/ 
    $.ajax({
        url: "http://fundoonotes.incubation.bridgelabz.com/api/user/searchUserList",
        data:  JSON.stringify(searchUser), 
        type: "POST",
        headers: { 'Authorization': localStorage.getItem('token') },
        contentType: "application/json;charset=utf-8",
        success: function(result){
        users=result.data.details;
        console.log("users = ",users);
                 
          /** display users ****/  
       var wrapper = document.getElementById("collabUser");
           
       var myHTML = ''; 
       for (var i = 0; i < users.length; i++)
        {  
          //myHTML +='<li role="presentation">1<a role="menuitem" tabindex="-1" href="#">'+users[i].email+'</a></li>';
          myHTML +='<tr><td>'+users[i].email+'</td></li>';
        
        }
         wrapper.innerHTML = myHTML

         var table = document.getElementById('collabUser');
         console.log("length === > ",table.rows.length);
         var   newCollaborator;
          for(var i = 1; i < table.rows.length; i++)
          {
              table.rows[i].onclick = function()
              { 
                newCollaborator =  this.cells[0].innerHTML;
                document.getElementById("newPerson").value = this.cells[0].innerHTML;
                console.log("fname = > ",newCollaborator);
                console.log("user is arr = ",users);
                
                var res = users.find(({email}) => email === newCollaborator );
                console.log("res = >",res);   

                $(document).on("click" , "#addCollaborator" , function(e) {   
                                  
                  var x = document.getElementById("snackbarCollaborator")
                   x.className = "show";

                   $.ajax({
                      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/"+data+"/AddcollaboratorsNotes",
                      data:  JSON.stringify(res), 
                      type: "POST",
                        headers: {
                           'Authorization': localStorage.getItem('token')
                         },
                          contentType: "application/json;charset=utf-8",
                          success: function (result) 
                          {
                            console.log("result =",result);
                             if(result.statusCode === 200)
                             {
                              console.log("success");
                              setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
                              location.reload(true);
                            }
                          },
                          error: function (errorMessage)
                          {
                           console.log("Error", errorMessage);
                          }
                        });//ajax
                  });//addColl
              }//table
          }  //for  
      }//succ
     });//ajax
  });//keyup
 });//coll

/**************************************** Label create ***********************************************************************/ 
  $(function() {
    $("#label_error_message").hide();
    
    var error_label = false;
    
    $("#label").focusout(function() {
       check_label();
    });  
    
    function check_label() {
      var pattern = /^[a-zA-Z ]*$/;
      var title = $("#labelName").val()
      if (pattern.test(title) && title !== ''){
           $("#label_error_message").hide();
         //  $("#label").css("border-bottom","2px solid #34F458");
        } else {
           $("#label_error_message").html("Invalid title");
           $("#label_error_message").show();
          // $("#label").css("border-bottom","2px solid #F90A0A");
           error_label = true;
        }
     }
    
    
  
  $(document).on("click" , "#createLabel" , function(e) { 
   console.log("in label");
  
    var newlabel= $('.newLabel').val();
       
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
          location.reload(true);
        },
        error: function (errorMessage)
        {
         console.log("Error", errorMessage);
        }
      });
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
  
       var wrapperLabel=document.getElementById("labelsAll");  
       var myHTML = ''; 
       for (var i = 0; i < labels.length; i++)
        {  
          myHTML +='<div id='+[i]+' class="labelData"><i class="fa fa-trash" id="deleteLabelIcon" style="font-size:24px ;font-size: 24px;margin-left: 20px;"></i><input type="text" id="labelName"  value='+labels[i].label+'><i class="material-icons" id="editLabel">mode_edit</i></div>';
        }
        wrapperLabel.innerHTML = myHTML

       var wrapper = document.getElementById("allLabels");
       var myHTML = ''; 
       for (var i = 0; i < labels.length; i++)
        {  
          myHTML +=' <div class="labelData"><img src="/images/labelIcon.svg" class=""><input type="text" id="labelName"  value='+labels[i].label+'></div>';
        }
        wrapper.innerHTML = myHTML

        var wrapper = document.getElementById("checkBoxLabel");
        var myHTML = ''; 
        for (var i = 0; i < labels.length; i++)
         {  

            myHTML +='<input type="checkbox" class="checks" value='+labels[i].label+'>'+labels[i].label+'<br>';
          //myHTML +='<input class="checks" type="checkbox"value='+labels[i].label+'>'+labels[i].label+'</br>';
         }
         wrapper.innerHTML = myHTML
      },
        error: function (errorMessage)
        {
         console.log("failed");
         console.log("Error", errorMessage);
        }
    });
   });
/************ create label with plus icon ************ *************************** */
$(".createNewLabel").click(function(){
  $(".plusCreate").css("display","block") 
  $(".createNewLabel").keyup(function(){
    $("#result").html($("#createNewLabel").val())
  });

  $(document).on("click" , "#createLabelPlus" , function(e) { 
    console.log("booom");
 
      var labelCreate = {
      label: $("#createNewLabel").val(),
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
          location.reload(true);
        },
        error: function (errorMessage)
        {
         console.log("Error", errorMessage);
        }
      });

  });
});

  /************ add label to note *************************************************************/  
  $(document).on("click" , "#addLabel" , function(e) { 
    console.log("in addlabel to note");
     
    noteId=$(this).closest('div.card').attr('id');
    data = notes[noteId].id;
    console.log("note id is :",data);

    $(".addLabelWithCreate").css("display","block")
   
    $('.checks').click(function(){
      var text = "";
      $('.checks:checked').each(function(){
        text +=$(this).val();

        let obj = labels.find(label => label.label === text);
        console.log("res = >",obj);
        id= obj.id,
           
        $.ajax({
          url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/"+data+"/addLabelToNotes/"+id+"/add",
          data:  JSON.stringify(obj), 
          type: "POST",
            headers: {
               'Authorization': localStorage.getItem('token')
             },
              contentType: "application/json;charset=utf-8",
              success: function (result) 
              {
                var x = document.getElementById("snackbarLabelAdded");
                x.className = "show"; 
                console.log("success");
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
                location.reload(true);
              },
              error: function (errorMessage)
              {
                console.log("fail");
                console.log("Error", errorMessage);
              }
            });
         
      })
    })
  });


/************ delete label *****************************************************/  
$(document).on("click" , "#deleteLabelIcon" , function(e) { 
  console.log("in delete label");
      
  labelId=$(this).closest('div .labelData').attr('id');
  console.log("labelid ",labelId);
  
  data = labels[labelId].id;
  console.log("data is :",data);

  
   var x = document.getElementById("snackbarLabelDeleted")
   x.className = "show";

  $.ajax({
   url: "http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/"+data+"/deleteNoteLabel",
   data:  JSON.stringify(data), 
   type: "DELETE",
     headers: {
        'Authorization': localStorage.getItem('token')
      },
       contentType: "application/json;charset=utf-8",
       success: function (result) 
       {
         console.log("success");
         for( var i = 0; i < labels.length; i++)
         {
            if ( labels[i] === data) 
            {
              console.log(labels[i]);
              labels.splice(i, 1);
            }
          }
         $(location).attr('href',"/views/dashboard/dashboard.html");
         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
       },
       error: function (errorMessage)
       {
        console.log("Error", errorMessage);
       }
     });
   });   

   /************ update label *****************************************************/  
$(document).on("click" , "#editLabel" , function(e) { 
  console.log("in update label");
      
  labelId=$(this).closest('div .labelData').attr('id');
  console.log("labelid ",labelId);

  updatingLabel=$('#labelName').val();
  console.log("updatingLabel ",updatingLabel);

  
  data = labels[labelId].id;
  console.log("data is :",data);

  var labelUpdate={
      label: $('#labelName').val(),
      isDeleted : false,
      userId: localStorage.getItem('userId')
  }
   var x = document.getElementById("snackbarLabelUpdated")
   x.className = "show";

  $.ajax({
   url: "http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/"+data+"/updateNoteLabel",
   data:  JSON.stringify(labelUpdate), 
   type: "POST",
     headers: {
        'Authorization': localStorage.getItem('token')
      },
       contentType: "application/json;charset=utf-8",
       success: function (result) 
       {
         console.log("success");
         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
         //location.reload(true);
        },
       error: function (errorMessage)
       {
        console.log("Error", errorMessage);
       }
     });
   });  
   
    /************ working on sidebar *******************************************************************/  
  $(document).on("click" , "#normalNotes" , function(e) { 
    console.log("in normalNotes");
  
    $.ajax({
      
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
      type: "GET",
      headers: { 'Authorization': localStorage.getItem('token') },
      
      success: function(result){
      notes=result.data.data;
      console.log("notes = ",notes);

/*********************** pin and unpin notes **********************************/ 
      // var pinNotes=[];var unpinNotes=[];
      // for(var i=0;i<notes.length;i++){
      //   if(notes[i].isPined === true){
      //     pinNotes.push(notes[i]);
      //   }
      //   else{
      //   unpinNotes.push(notes[i]);
      //   }
      // }
      // console.log("pin : ",pinNotes);
      // console.log("unpin : ",unpinNotes);

          /** PIN ****/  
          var wrapper = document.getElementById("pinnedNotes");
          var id = document.getElementById("id");
       
          var currentDateTime=new Date();
          var currentDateTime=currentDateTime.getDate()+"/"+(currentDateTime.getMonth()+1)+"/"+currentDateTime.getFullYear()+" "+currentDateTime.getHours()+":"+currentDateTime.getMinutes();
          console.log("*** ",currentDateTime);
   
          var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
          var now       = new Date();
          var thisMonth = months[now.getMonth()];
          var output = document.getElementById('output');
          console.log(thisMonth); 
   
          var myHTML = ''; 
         //  var newRemDate;
          for (var i = 0; i < notes.length; i++)
           {
             //console.log("HERE WE GO : ",notes[i].label);
             
             var newRemDate=new Date(notes[i].reminder);
             newReminderDate=thisMonth+" "+newRemDate.getDate()+","+newRemDate.getHours()+":"+newRemDate.getMinutes();
             
             var labelName=notes[i].noteLabels;
             console.log("*** LabelName = ",labelName);
             
             // var wrapper = document.getElementById("labelName");
             // var myHTML = '';
              //for(var i=0;i<labelName.length;i++)
              //{
             //  console.log(labelName[i].label);
               
             //   myHTML +='<button class="button remainderTime">'+labelName.label+'</button>';
             // } 
   
             if(notes[i].isPined === true && notes[i].isArchived === false && notes[i].reminder.length > 0  &&  notes[i].isDeleted === false)
             {
               myHTML +='<div style=background-color:'+notes[i].color+' class="card" id='+[i]+'><img src="/images/newImagePin.svg" id="pin" ><div class="card-body"><div class="info"  data-toggle="modal" data-target="#myModal" style="color: black;"><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span></div><div id="desc" class="desc" style="margin-top: 10px;"><span class="descr">'+notes[i].description+'</span></div></div><div class="remAndLabel"><button class="button remainderTime" id="remainderTime"><i class="far fa-clock" style="color:grey;"></i><span id="dateAndTime">'+newReminderDate+'</span><i class="material-icons" role="button" id="deleteReminder">cancel</i></button><div class="labelName" id="labelName"></div></div><footer><ul class="noteIcon" ><li class="icon-item"><i class="material-icons"  id="remainder"  data-toggle="modal" data-target="#myRemindModal">add_alert</i></li><li class="icon-item"><i class="material-icons" id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal">person_add</i></li> <li class="icon-item dropdown"><i class="fas fa-palette dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color"  class="color" value="#FF0000"  style="background-color: #FF0000;"></div></li><li><div href="#" class="color"  value="#FFA500" style="background-color: #FFA500;"></div></li><li><div href="#" class="color"  value="#FFFF00" style="background-color: #FFFF00;"></div></li><li><div href="#" class="color"  value="#008000" style="background-color: #008000;"></div></li><li><div href="#" class="color"  value="#008080" style="background-color: #008080"></div></li><li><div href="#" class="color"   value="#0000FF" style="background-color: #0000FF;"></div></li><li><div href="#" class="color"  value="#0000A0" style="background-color: #0000A0;"></div></li><li><div href="#" class="color"  value="#800080" style="background-color:#800080 ;"></div></li><li><div href="#" class="color"  value="#FFC0CB" style="background-color: #FFC0CB;"></div></li></ul></li></li><li class="icon-item"><i class="far fa-image" id=""></i></li><li class="icon-item" id="archieveNote"><img src="/images/archiveNew.svg" class="archive"></i></li><li class="icon-item dropdown" ><i class="fas fa-ellipsis-v" role="button" data-toggle="dropdown" id="moreIcon"></i><ul class="dropdown-menu" id="moreData" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item  popup" onclick="myFunction()" id="addLabel">Add Label</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></footer></div></div></div>';
             }
            else if(notes[i].isPined === true && notes[i].isArchived === false && notes[i].reminder.length === 0  &&  notes[i].isDeleted === false)
             {
               myHTML +='<div style=background-color:'+notes[i].color+' class="card" id='+[i]+'><img src="/images/newImagePin.svg" id="pin" ><div class="card-body"><div class="info"  data-toggle="modal" data-target="#myModal" style="color: black; "><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span></div><div id="desc" class="desc" style="margin-top: 10px;"><span class="descr">'+notes[i].description+'</span></div></div><div class="remAndLabel"></div><footer><ul class="noteIcon" ><li class="icon-item"><i class="material-icons"  id="remainder"  data-toggle="modal" data-target="#myRemindModal">add_alert</i></li><li class="icon-item"><i class="material-icons" id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal">person_add</i></li> <li class="icon-item dropdown"><i class="fas fa-palette dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color"  class="color" value="#FF0000"  style="background-color: #FF0000;"></div></li><li><div href="#" class="color"  value="#FFA500" style="background-color: #FFA500;"></div></li><li><div href="#" class="color"  value="#FFFF00" style="background-color: #FFFF00;"></div></li><li><div href="#" class="color"  value="#008000" style="background-color: #008000;"></div></li><li><div href="#" class="color"  value="#008080" style="background-color: #008080"></div></li><li><div href="#" class="color"   value="#0000FF" style="background-color: #0000FF;"></div></li><li><div href="#" class="color"  value="#0000A0" style="background-color: #0000A0;"></div></li><li><div href="#" class="color"  value="#800080" style="background-color:#800080 ;"></div></li><li><div href="#" class="color"  value="#FFC0CB" style="background-color: #FFC0CB;"></div></li></ul></li></li><li class="icon-item"><i class="far fa-image" id=""></i></li><li class="icon-item" id="archieveNote"><img src="/images/archiveNew.svg" class="archive"></i></li><li class="icon-item dropdown" ><i class="fas fa-ellipsis-v" role="button" data-toggle="dropdown" id="moreIcon"></i><ul class="dropdown-menu" id="moreData" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item" id="addLabel">Add label</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></footer></div></div></div>';
             }
             else{
               console.log("nothing to display");
             }
         }
            wrapper.innerHTML = myHTML
   
           /** UNPIN ****/  
          var wrapper = document.getElementById("unpinNotes");
          var id = document.getElementById("id");
       
          var myHTML = ''; 
          for (var i = 0; i < notes.length; i++)
           {  
             var newRemDate=new Date(notes[i].reminder);
             newReminderDate=thisMonth+" "+newRemDate.getDate()+","+newRemDate.getHours()+":"+newRemDate.getMinutes();
            
             var labelName=notes[i].noteLabels;
   
             if(notes[i].isPined === false && notes[i].isArchived === false && notes[i].reminder.length > 0 &&  notes[i].isDeleted === false)
             {
               myHTML +='<div style=background-color:'+notes[i].color+' class="card" id='+[i]+'><img src="/images/unpinnnn.png" id="unpin" ><div class="card-body"><div class="info"  data-toggle="modal" data-target="#myModal" style="color: black; "><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span></div><div id="desc" class="desc" style="margin-top: 10px;"><span class="descr">'+notes[i].description+'</span></div></div><div class="remAndLabel"><button class="button remainderTime" id="remainderTime"><i class="far fa-clock" style="color:grey;"></i><span id="dateAndTime">'+newReminderDate+'</span><i class="material-icons" role="button" id="deleteReminder">cancel</i></button><div class="labelName" id="labelName"></div></div><footer><ul class="noteIcon" ><li class="icon-item"><i class="material-icons"  id="remainder"  data-toggle="modal" data-target="#myRemindModal">add_alert</i></li><li class="icon-item"><i class="material-icons" id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal">person_add</i></li> <li class="icon-item dropdown"><i class="fas fa-palette dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color"  class="color" value="#FF0000"   style="background-color: #FF0000;"></div></li><li><div href="#" class="color"  value="#FFA500" style="background-color: #FFA500;"></div></li><li><div href="#" class="color"  value="#FFFF00" style="background-color: #FFFF00;"></div></li><li><div href="#" class="color"  value="#008000" style="background-color: #008000;"></div></li><li><div href="#" class="color"  value="#008080" style="background-color: #008080"></div></li><li><div href="#" class="color"   value="#0000FF" style="background-color: #0000FF;"></div></li><li><div href="#" class="color"  value="#0000A0" style="background-color: #0000A0;"></div></li><li><div href="#" class="color"  value="#800080" style="background-color:#800080 ;"></div></li><li><div href="#" class="color"  value="#FFC0CB" style="background-color: #FFC0CB;"></div></li></ul></li></li><li class="icon-item"><i class="far fa-image" id=""></i></li><li class="icon-item" id="archieveNote"><img src="/images/archiveNew.svg" class="archive"></i></li><li class="icon-item dropdown" ><i class="fas fa-ellipsis-v" role="button" data-toggle="dropdown" id="moreIcon"></i><ul class="dropdown-menu lastDropdown" id="moreData" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item" id="addLabel>Add label</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></footer></div></div></div>';
             }
             else if(notes[i].isPined === false && notes[i].isArchived === false && notes[i].reminder.length === 0 &&  notes[i].isDeleted === false)
             {
              myHTML +='<div style=background-color:'+notes[i].color+' class="card" id='+[i]+'><img src="/images/unpinnnn.png" id="unpin" ><div class="card-body"><div class="info"  data-toggle="modal" data-target="#myModal" style="color: black; "><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span></div><div id="desc" class="desc" style="margin-top: 10px;"><span class="descr">'+notes[i].description+'</span></div></div><div class="remAndLabel"></div><footer><ul class="noteIcon" ><li class="icon-item"><i class="material-icons"  id="remainder"  data-toggle="modal" data-target="#myRemindModal">add_alert</i></li><li class="icon-item"><i class="material-icons" id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal">person_add</i></li> <li class="icon-item dropdown"><i class="fas fa-palette dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color"  class="color" value="#FF0000"   style="background-color: #FF0000;"></div></li><li><div href="#" class="color"  value="#FFA500" style="background-color: #FFA500;"></div></li><li><div href="#" class="color"  value="#FFFF00" style="background-color: #FFFF00;"></div></li><li><div href="#" class="color"  value="#008000" style="background-color: #008000;"></div></li><li><div href="#" class="color"  value="#008080" style="background-color: #008080"></div></li><li><div href="#" class="color"   value="#0000FF" style="background-color: #0000FF;"></div></li><li><div href="#" class="color"  value="#0000A0" style="background-color: #0000A0;"></div></li><li><div href="#" class="color"  value="#800080" style="background-color:#800080 ;"></div></li><li><div href="#" class="color"  value="#FFC0CB" style="background-color: #FFC0CB;"></div></li></ul></li></li><li class="icon-item"><i class="far fa-image" id=""></i></li><li class="icon-item" id="archieveNote"><img src="/images/archiveNew.svg" class="archive"></i></li><li class="icon-item dropdown" ><i class="fas fa-ellipsis-v" role="button" data-toggle="dropdown" id="moreIcon"></i><ul class="dropdown-menu lastDropdown" id="moreData" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item" id="addLabel">Add Label</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></footer></div></div></div>';
             }
             else{
               console.log("nothing to display");
             }
   
         }
            wrapper.innerHTML = myHTML
         }});
      });
  /************* archive notes********************************/ 
  $(document).on("click" , "#allArchiveNotes" , function(e) { 
    console.log("in allArchiveNotes");

    $.ajax({
      
          url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getArchiveNotesList",
          type: "GET",
          headers: { 'Authorization': localStorage.getItem('token') },
          
          success: function(result){
            archiveNotes=result.data.data;
          console.log("archiveNotes = ",archiveNotes);

          var wrapper = document.getElementById("display");
          var id = document.getElementById("id");
    
          var myHTML = ''; 
          for (var i = 0; i < archiveNotes.length; i++)
            {  
              myHTML +='<div style=background-color:'+notes[i].color+' class="card" id='+[i]+'><img src="/images/unpinnnn.png" id="unpin" ><div class="card-body"><div class="info" style="color: black; "><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span></div><div id="desc" class="desc" style="margin-top: 10px;"><span class="descr"> '+notes[i].description+'</span></div></div><footer><ul class="noteIcon" ><li class="icon-item"><i class="material-icons"  id="remainder"  data-toggle="modal" data-target="#myRemindModal">add_alert</i></li><li class="icon-item"><i class="material-icons" id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal">person_add</i></li> <li class="icon-item dropdown"><i class="fas fa-palette dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color"  class="color" value="#FF0000"  style="background-color: #FF0000;"></div></li><li><div href="#" class="color"  value="#FFA500" style="background-color: #FFA500;"></div></li><li><div href="#" class="color"  value="#FFFF00" style="background-color: #FFFF00;"></div></li><li><div href="#" class="color"  value="#008000" style="background-color: #008000;"></div></li><li><div href="#" class="color"  value="#008080" style="background-color: #008080"></div></li><li><div href="#" class="color"   value="#0000FF" style="background-color: #0000FF;"></div></li><li><div href="#" class="color"  value="#0000A0" style="background-color: #0000A0;"></div></li><li><div href="#" class="color"  value="#800080" style="background-color:#800080 ;"></div></li><li><div href="#" class="color"  value="#FFC0CB" style="background-color: #FFC0CB;"></div></li></ul></li></li><li class="icon-item"><i class="far fa-image" id=""></i></li><li class="icon-item" id="archieveNote"><img src="/images/archiveNew.svg" class="archive"></i></li><li class="icon-item dropdown" ><i class="fas fa-ellipsis-v" role="button" data-toggle="dropdown" id="moreIcon"></i><ul class="dropdown-menu" id="moreData" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item  popup" onclick="myFunction()" id="addLabel">Add Label</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></footer></div></div></div>';
            }
            wrapper.innerHTML = myHTML
              }
        
        });
  });

  /************* trash notes********************************/ 
    $(document).on("click" , "#trashNotes" , function(e) { 
    console.log("in trash");
  
    $.ajax({
      
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getTrashNotesList",
      type: "GET",
      headers: { 'Authorization': localStorage.getItem('token') },
      
      success: function(result){
      trashNotes=result.data.data;
      console.log("trashNotes = ",trashNotes);

      var wrapper = document.getElementById("display");
      var id = document.getElementById("id");

      var myHTML = ''; 
      for (var i = 0; i < trashNotes.length; i++)
        {  
          myHTML +='<div style=background-color:'+notes[i].color+' class="card" id='+[i]+'><img src="/images/unpinnnn.png" id="unpin" ><div class="card-body"><div class="info" style="color: black; "><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span></div><div id="desc" class="desc" style="margin-top: 10px;"><span class="descr">'+notes[i].description+'</span></div></div><footer><ul class="noteIcon" ><li class="icon-item"><i class="material-icons"  id="remainder"  data-toggle="modal" data-target="#myRemindModal">add_alert</i></li><li class="icon-item"><i class="material-icons" id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal">person_add</i></li> <li class="icon-item dropdown"><i class="fas fa-palette dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color"  class="color" value="#FF0000"  style="background-color: #FF0000;"></div></li><li><div href="#" class="color"  value="#FFA500" style="background-color: #FFA500;"></div></li><li><div href="#" class="color"  value="#FFFF00" style="background-color: #FFFF00;"></div></li><li><div href="#" class="color"  value="#008000" style="background-color: #008000;"></div></li><li><div href="#" class="color"  value="#008080" style="background-color: #008080"></div></li><li><div href="#" class="color"   value="#0000FF" style="background-color: #0000FF;"></div></li><li><div href="#" class="color"  value="#0000A0" style="background-color: #0000A0;"></div></li><li><div href="#" class="color"  value="#800080" style="background-color:#800080 ;"></div></li><li><div href="#" class="color"  value="#FFC0CB" style="background-color: #FFC0CB;"></div></li></ul></li></li><li class="icon-item"><i class="far fa-image" id=""></i></li><li class="icon-item" id="archieveNote"><img src="/images/archiveNew.svg" class="archive"></i></li><li class="icon-item dropdown" ><i class="fas fa-ellipsis-v" role="button" data-toggle="dropdown" id="moreIcon"></i><ul class="dropdown-menu" id="moreData" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class=" dropdown-item popup" onclick="myFunction()" id="addLabel">Add Label</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></footer></div></div></div>';
        }
        wrapper.innerHTML = myHTML
          }
    });
  });

  /************* reminder notes********************************/ 
    $(document).on("click" , "#reminderNotes" , function(e) { 
    console.log("in remNotes");
   
      $.ajax({
      
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getReminderNotesList",
      type: "GET",
      headers: { 'Authorization': localStorage.getItem('token') },
      
      success: function(result){
      reminderNotes=result.data.data;
      console.log("reminderNotes = ",reminderNotes);
           
      var currentDateTime =  new Date();
      console.log("date time ",currentDateTime);
      
      
      /** FIRED ****/  
      var wrapper = document.getElementById("pinnedNotes");
      var fired = document.getElementById("a1");
      fired.innerHTML="<b>FIRED</b>";

      var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      var now       = new Date();
      var thisMonth = months[now.getMonth()];
      var output = document.getElementById('output');
      console.log(thisMonth); 

      var myHTML = ''; var newReminderDate;
      for (var i = 0; i < reminderNotes.length; i++)
        {  
          var newRemDate=new Date(reminderNotes[i].reminder);
          newReminderDate=thisMonth+" "+newRemDate.getDate()+","+newRemDate.getHours()+":"+newRemDate.getMinutes();
          // console.log("@@fired@@ ",newReminderDate);
          console.log("fired = >","curr ",currentDateTime.toString() +" "+ "rem ",newReminderDate.toString())

          if(newReminderDate.toString() < currentDateTime.toString())
          {
            myHTML +='<div style=background-color:'+notes[i].color+' class="card" id='+[i]+'><img src="/images/newImagePin.svg" id="pin" ><div class="card-body"><div class="info" style="color: black;"><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span></div><div id="desc" class="desc" style="margin-top: 10px;"><span class="descr">'+notes[i].description+'</span></div></div><div class="remAndLabel"><button class="button remainderTime" id="remainderTime"><i class="far fa-clock" style="color:grey;"></i><span id="dateAndTime">'+newReminderDate+'</span><i class="material-icons" role="button" id="deleteReminder">cancel</i></button><div class="labelName" id="labelName"></div></div><footer><ul class="noteIcon" ><li class="icon-item"><i class="material-icons"  id="remainder"  data-toggle="modal" data-target="#myRemindModal">add_alert</i></li><li class="icon-item"><i class="material-icons" id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal">person_add</i></li> <li class="icon-item dropdown"><i class="fas fa-palette dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color"  class="color" value="#FF0000"  style="background-color: #FF0000;"></div></li><li><div href="#" class="color"  value="#FFA500" style="background-color: #FFA500;"></div></li><li><div href="#" class="color"  value="#FFFF00" style="background-color: #FFFF00;"></div></li><li><div href="#" class="color"  value="#008000" style="background-color: #008000;"></div></li><li><div href="#" class="color"  value="#008080" style="background-color: #008080"></div></li><li><div href="#" class="color"   value="#0000FF" style="background-color: #0000FF;"></div></li><li><div href="#" class="color"  value="#0000A0" style="background-color: #0000A0;"></div></li><li><div href="#" class="color"  value="#800080" style="background-color:#800080 ;"></div></li><li><div href="#" class="color"  value="#FFC0CB" style="background-color: #FFC0CB;"></div></li></ul></li></li><li class="icon-item"><i class="far fa-image" id=""></i></li><li class="icon-item" id="archieveNote"><img src="/images/archiveNew.svg" class="archive"></i></li><li class="icon-item dropdown" ><i class="fas fa-ellipsis-v" role="button" data-toggle="dropdown" id="moreIcon"></i><ul class="dropdown-menu" id="moreData" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item popup" onclick="myFunction()" id="addLabel">Add Label</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></footer></div></div></div>';
          }
        }
        wrapper.innerHTML = myHTML

         /** UPCOMING ****/  
      var wrapper = document.getElementById("unpinNotes");
      var upcoming = document.getElementById("a2");
      upcoming.innerHTML="<b>UPCOMING</b>";
 
       var myHTML = ''; 
      for (var i = 0; i < reminderNotes.length; i++)
        {  
          var newRemDate = new Date(reminderNotes[i].reminder);
          newReminderDate=thisMonth+" "+newRemDate.getDate()+","+newRemDate.getHours()+":"+newRemDate.getMinutes();
         // console.log("@@upcoming@@ ",newReminderDate);
        // console.log("upcoming =>","curr ",currentDateTime.toString() +" "+ "rem ",newReminderDate)
          if(newReminderDate.toString > currentDateTime.toString())
          {
            console.log("***",newRemDate);
            myHTML +='<div style=background-color:'+notes[i].color+' class="card" id='+[i]+'><img src="/images/newImagePin.svg" id="pin" ><div class="card-body"><div class="info" style="color: black;"><div class="tit" id="tit"><span class="tite">'+notes[i].title+'</span></div><div id="desc" class="desc" style="margin-top: 10px;"><span class="descr">'+notes[i].description+'</span></div></div><div class="remAndLabel"><button class="button remainderTime" id="remainderTime"><i class="far fa-clock" style="color:grey;"></i><span id="dateAndTime">'+newReminderDate+'</span><i class="material-icons" role="button" id="deleteReminder">cancel</i></button><div class="labelName" id="labelName"></div></div><footer><ul class="noteIcon" ><li class="icon-item"><i class="material-icons"  id="remainder"  data-toggle="modal" data-target="#myRemindModal">add_alert</i></li><li class="icon-item"><i class="material-icons" id="collaborator" data-toggle="modal" data-target="#myCollaboratorModal">person_add</i></li> <li class="icon-item dropdown"><i class="fas fa-palette dropbtn"  data-toggle="dropdown" role="button" id="colors"></i><ul class="dropdown-menu" id="colorList" aria-labelledby="colors"><li><div href="#" class="color"  class="color" value="#FF0000"  style="background-color: #FF0000;"></div></li><li><div href="#" class="color"  value="#FFA500" style="background-color: #FFA500;"></div></li><li><div href="#" class="color"  value="#FFFF00" style="background-color: #FFFF00;"></div></li><li><div href="#" class="color"  value="#008000" style="background-color: #008000;"></div></li><li><div href="#" class="color"  value="#008080" style="background-color: #008080"></div></li><li><div href="#" class="color"   value="#0000FF" style="background-color: #0000FF;"></div></li><li><div href="#" class="color"  value="#0000A0" style="background-color: #0000A0;"></div></li><li><div href="#" class="color"  value="#800080" style="background-color:#800080 ;"></div></li><li><div href="#" class="color"  value="#FFC0CB" style="background-color: #FFC0CB;"></div></li></ul></li></li><li class="icon-item"><i class="far fa-image" id=""></i></li><li class="icon-item" id="archieveNote"><img src="/images/archiveNew.svg" class="archive"></i></li><li class="icon-item dropdown" ><i class="fas fa-ellipsis-v" role="button" data-toggle="dropdown" id="moreIcon"></i><ul class="dropdown-menu" id="moreData" aria-labelledby="moreIcon"><li class="dropdown-item" id="deleteNote">Delete note</li><li class="dropdown-item popup" onclick="myFunction()" id="addLabel">Add Label</li><li class="dropdown-item">Add drawing</li><li class="dropdown-item">Make a copy</li></ul></li></ul></footer></div></div></div>';

          }
        }
        wrapper.innerHTML = myHTML
     }
    });
  });

  /**************** signout *********************************************************/ 
  document.getElementById("fullName").innerHTML = fullName;
document.getElementById("emailData").innerHTML = email;

$(document).on("click" , ".signout" , function(e) { 
  console.log("in signout");

  $.ajax({
    url: "http://fundoonotes.incubation.bridgelabz.com/api/user/logout",
    type: "POST",
    headers: { 'Authorization': localStorage.getItem('token') },
    
    success: function(result){
    console.log(result);
    $(location).attr('href',"http://127.0.0.1:5500/views/user/login.html");
    }
  });
});

// /*********** grid view list ******************************************/ 
// $(document).on("click" , ".middleIcon" , function(e) { 
//   console.log("in midleicon");
//   $(".midIcon").html('<i class="material-icons gridView" style="margin-top: 1px;font-size:36px">widgets</i>');

//   $(".card").css({"width": "600px"})
//   $("#a1, #a2").css({"margin-left": "255px"})
//   $(".createNote").css({"width":"195px","background-color":"white","width": "680px","border-radius": "5px","grid-row-gap": "15px","margin-top":"30px","margin-left": "305px","height": "195px","box-shadow": "0 4px 11px rgba(0,0,0,0.20)"});
//   $(".noteIcon").css({"padding-right": "-9px","margin-top": "2px","display": "flex","margin-left": "-9px"})
//   $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "565px","margin-top": "10px","z-index": "1"})
// });


// $(document).on("click" , ".gridView" , function(e) { 
//   console.log("in grid view");
//   $(".midIcon").html('<i class="material-icons middleIcon">view_stream</i>');

//   $(".card").css({"width": "320px","height":"fit-content","margin":"5px","border-radius":"6px","margin-left": "15px"})
//   $("#a1, #a2").css({"margin-left": "140px"})
//   $(".noteIcon").css({"padding-right": "-1px","margin-top": "0px","display": "flex"})
//   $("#unpin, #pin").css({"width": "25px","height": "22px","margin-left": "255px","margin-top": "10px","z-index": "1"})
//   var resWidth = screen.width
// });
let createColor='';
/**********  create note functionality **********************************************************************/ 
function insrt(color) {
  console.log('color is ',color);
  createColor=color;
  $('.createNote').css({"background-color": color});// $('#colorList').val());
}

  $(document).on("click" , "#reminderData" , function(e) { 
    console.log("hiii");
    date=$('#reminderDate').val();
    console.log("date is",date);
  });

    
    var pinClicked;
  $("#unpincreateNote").click(function(){
  if( pinClicked!= true )
   {
    pinClicked= true;
   }
   else{
    console.log("Button was clicked before");
   }
  });             
     
  var archiveClicked;
$("#archieveCreateNote").click(function(){
if( archiveClicked!= true ) {
  archiveClicked= true;
  }
  else{
   console.log("Button was clicked before");
  }
});

      $("#closeCreateNote").click(function () {
      console.log("in button",createColor);
    
      const createNoteObj={
        title:$('#title').val(),
        description:$('#desc').val(),
         isPined:pinClicked,
         isArchived:archiveClicked,
        color:createColor,
        reminder : $('#reminderDate').val()

      } 
      console.log("createNoteObject =>  ",createNoteObj);

       if ( $('#title').val() != 0 && $('#desc').val() != 0)
      {
         var token= localStorage.getItem("token");
         console.log("token =>",token);

         var x = document.getElementById("snackbarNoteCreate")
         x.className = "show";

         $.ajax({
          url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",
          data:  JSON.stringify(createNoteObj),  
          type: "POST",
          headers: {
             'Authorization': localStorage.getItem('token')
           },
          contentType: "application/json;charset=utf-8",
          success: function (status) 
          {
             setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
            resetForm();
            location.reload(true);
          },
            error: function (errorMessage)
             {
               console.log("Error", errorMessage);
             }
         });
          return true;
       } else 
       {
          return false;
       }
 });

/*********************** search Note and display on dashboard ********************************************/  
$(document).ready(function(){
  console.log("in ");
  var searchNote;
  $("#searchNote").keyup(function (){
    console.log("in  searchNote keyup");
    
    var searchNote =$("#searchNote").val()
    console.log("searching note = ",searchNote);

    var filteredNames= notes.filter(function(note){
      console.log("before");
      return (note.title).charAt(0)  == searchNote;
    })
        
      console.log("filtered Array is =  > ",filteredNames);
   });

   
});

/******************************** uploadImage image ******************************************/ 
$(document).on("click" , ".uploadImage" , function(e) { 
  console.log("in uploadImage");

  // $.ajax({
  //   url: "",
  //   type: "POST",
  //   headers: { 'Authorization': localStorage.getItem('token') },
    
  //   success: function(result){
  //   console.log(result);
  //  // $(location).attr('href',"http://127.0.0.1:5500/views/user/login.html");
  //   }
  // });
});


/************** popup ***********************************************************/ 
// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}