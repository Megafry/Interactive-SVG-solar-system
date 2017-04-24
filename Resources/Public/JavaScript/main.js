$( document ).ready(function() {
    console.log( "ready!" );

    $(".planet").each( function(){
      var refName = $(this).attr("data-ref");
      var card = $("#info__"+refName);
      $(this).clone().attr("class","").appendTo(card).wrap('<svg class="card-svg" width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">');
    });

    $(".planet, #iss").on("click", function(){
      var refName = $(this).attr("data-ref");
      $(".info-card").removeClass("active");
      var card = $("#info__"+refName);
      card.addClass("active");

    });

    $(".close").on("click", function(){
      $(this).parent().removeClass("active");
      $(this).parent().find("audio")[0].pause();
    });

    function updatePlayer(){
      var player = $('.player');
      player.each(function(){
        var audio = $(this).find("audio")[0];
        var currentTime = audio.currentTime;
        var duration = audio.duration;
        progress = (100/duration)*currentTime*3.6;
        $(this).find(".progress").css("transform",'rotate('+progress+'deg) translate(0px, -26px)');
      });


    }

    setInterval(updatePlayer, 1000);


    $('.player').click(function() {
        $(this).toggleClass("play");

        var player = $(this).find("audio")[0];
        if (player.paused == false) {
            player.pause();
            return false;
        }
        player.play();
        return false;
    });



});
