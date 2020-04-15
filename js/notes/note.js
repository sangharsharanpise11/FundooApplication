// console.log("in display note");
  
// $(document).ready(function(){
//   $("#note").click(function(){
//       alert("click");
//       $("#openNote").css("display","block")
//   });
// });

//  var token= localStorage.getItem("token");
//  console.log("token =>",token);

//  var notes=[];
//  $(document).ready(function(){
  
//     $.ajax({
        
//         url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
//         type: "GET",
//         headers: { 'Authorization': localStorage.getItem('token') },
        
//         success: function(result){
//         notes=result;
//         console.log("notes = ",notes);

//         var wrapper = document.getElementById("#display");
//         var myHTML = '';
      
//         for (var i = 0; i <notes.length; i++) {
//           myHTML += '<div class="card" id="note"><div class="card-body"><div class="info" style="color: black; "><input class="tit" id="tit" placeholder="title"><input id="desc" class="desc" style="margin-top: 20px;"placeholder="description"><div class="icons" style="padding-right: 10px;"><i class="material-icons">add_alert</i><i class="material-icons">person_add</i><i class="fas fa-palette"></i><i class="far fa-image"></i><img src="/images/archieve.png" style="width: 20px; height: 18px;"> <i class="fas fa-ellipsis-v"></i> </div></div></div></div>';
//           document.getElementById("#tit").innerHTML = notes[i].title;
//           document.getElementById("#desc").innerHTML = notes[i].description;
//         }
      
//         wrapper.innerHTML = myHTML
//      }});
//   });

  
//         // var wrapper = document.getElementById("#display");
//         // var myHTML = '';
      
//         // for (var i = 0; i <notes.length; i++) {
//         //   myHTML += '<div class="card" id="note"><div class="card-body"><div class="info" style="color: black; "><input class="tit" id="tit" placeholder="title"><input id="desc" class="desc" style="margin-top: 20px;"placeholder="description"><div class="icons" style="padding-right: 10px;"><i class="material-icons">add_alert</i><i class="material-icons">person_add</i><i class="fas fa-palette"></i><i class="far fa-image"></i><img src="/images/archieve.png" style="width: 20px; height: 18px;"> <i class="fas fa-ellipsis-v"></i> </div></div></div></div>';
//         //   document.getElementById("#tit").innerHTML = notes[i].title;
//         //   document.getElementById("#desc").innerHTML = notes[i].description;
//         // }
      
//         // wrapper.innerHTML = myHTML

  