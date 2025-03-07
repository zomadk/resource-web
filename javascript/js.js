//alert("Hello World!")

$(".menu-area").click(function() {
  //$(".menu-area").addClass("active")

  if($(".menu-area").hasClass("active")){
    $(".menu-area").removeClass("active")
  }
  else{
    $(".menu-area").addClass("active")
  }
})

$(".menu-area").hover(function(){
    $(".grid-sections").css("background-color", "yellow");
    }, function(){
    $(".grid-sections").css("background-color", "pink");
  });

