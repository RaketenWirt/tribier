function animateLogo(){$svg.drawsvg("animate")}function googleMap(){var o=document.getElementById("google-map"),e={center:new google.maps.LatLng(47.0582129,15.4593409),scrollwheel:!1,zoom:12,mapTypeId:google.maps.MapTypeId.ROADMAP},o=new google.maps.Map(o,e),a=new google.maps.LatLng(47.0582129,15.4593409);new google.maps.Marker({position:a,map:o,icon:"img/location-pin.svg"})}WebFont.load({google:{families:["Ubuntu:300,400,500,700","Montserrat:400,700"]}}),$svg=$(".logo > svg").drawsvg({duration:1500,callback:function(){$(".logo").addClass("active")}}),animateLogo(),$(".carousel").swiperight(function(){$(this).carousel("prev")}),$(".carousel").swipeleft(function(){$(this).carousel("next")}),google.maps.event.addDomListener(window,"load",googleMap);

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
