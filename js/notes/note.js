console.log("hello in js");
var innerHtml = "";
var array=[
    {
        title:'test1',description:'description1',noteId:'sjhdhvsdv'
    },
    {
        title:'test2',description:'description2',noteId:'jhdjhy'
    },
    {
        title:'test3',description:'description3',noteId:'sdjhv'
    },
    {
        title:'test4',description:'description4',noteId:'jhsvdyvsd'
    },
    {
        title:'test5',description:'description5',noteId:'ysfduf'
    }
    
    ]
for (let i = 0; i < array.length; i++) {
    innerHtml += '<div id='+i+' style="width: 200px;height: 60px;border: 1px solid gray;border-radius: 5px; padding: 10px;margin-bottom:4px;"> <div class="title" >'+array[i].title+'</div ><div class="des">'+array[i].description+'</div><img id="img" style="width: 25px;height: 25px;color: grey;" src="./assest/download.svg" alt=""><div id="menu" style="display:none; position: absolute;background: white;padding: 10px;box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149);">delete</div></div>';
}
var container = document.getElementById('display');

container.innerHTML=innerHtml;
$(document).on("click" , "#display .title " , function(e) 
{
    console.log($(this).parent().attr("id"));
    
//    alert('hello world');
});
$(document).on("click" , "#img" , function(e) 
{
    console.log($(this).parent().attr("id"));
    index=$(this).parent().attr("id");
    var myitem = document.querySelectorAll("#menu");
    console.log(myitem);
    myitem[index].style.display = "block"
//    alert('hello world');
});
$(document).on("click" , "#menu" , function(e) 
{
    console.log($(this).parent().attr("id"));
    index=$(this).parent().attr("id");

    console.log("id is ",array[index]);
    
//    alert('hello world');
});