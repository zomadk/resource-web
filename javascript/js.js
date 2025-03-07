//alert("Pages Linked!")
//$("#container")
//$("body")

    /*if (this is true){
        do this
    }
    else{
        do this
    }*/


$(".menu-area").click(function(){
    //$(".menu-area").addClass("active")

   /*if($(".menu-area").hasClass("active")){
    $(".menu-area").removeClass("active")
   }
   else{
    $(".menu-area").addClass("active")
   }*/
    $(".menu-area").toggleClass("active")
    console.log("Menu clicked")
})

$("#block-1").click(function(){
    $("#block-5").toggleClass("clicked")
    $("#block-2").css("background-color","yellow")
})




