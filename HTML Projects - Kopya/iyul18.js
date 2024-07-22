$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide(1000);
    });
    $("#show").click(function(){
      $("p").show(1000);
    });
    $("#toggle").click(function(){
        $("p").toggle(1000);
      });

    
    $("#fadeIn").click(function(){
        $("#div1").fadeIn("slow");
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn("slow");
        $("#div4").fadeIn("slow");
      });
    $("#fadeOut").click(function(){
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);
        $("#div4").fadeOut(1000);
      });
    $("#toggleBox").click(function(){
        $("#div1").fadeToggle("slow");
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle("slow");
        $("#div4").fadeToggle("slow");
      });
    $("#fadeTo").click(function(){
        $("#div1").fadeTo("slow", 0.3);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.5);
        $("#div4").fadeTo("slow", 0.6);
      });


    $("#slideDown").click(function(){
        $("#panel").slideDown("slow");
      });
    $("#slideUp").click(function(){
        $("#panel").slideUp("slow");
      });
    $("#togglePanel").click(function(){
        $("#panel").slideToggle("slow");
      });
    

    $("#animation").click(function(){
        const div = $("#colorBox");
        div.animate({width: '120px', opacity: '0.6'}, "slow");
        div.animate({height: '120px', opacity: '0.8'}, "slow");
        div.animate({width: '85px', opacity: '0.6'}, "slow");
        div.animate({height: '85px', opacity: '0.8'}, "slow");

        div.animate({left: '250px'})

        div.animate({height: '120px', opacity: '0.6'}, "slow");
        div.animate({width: '120px', opacity: '0.8'}, "slow");
        div.animate({height: '85px', opacity: '0.6'}, "slow");
        div.animate({width: '85px', opacity: '0.8'}, "slow");

        div.animate({height: 'toggle'})
      });
  });

// HTML CSS
$(document).ready(function(){
    $("#icon").click(function(){
        $("#panel").slideToggle("slow");
    });
});