var $ = function(id) { return document.getElementById(id); };

window.onload = function() {  
     var slides = [
        {href:"images/minneapolis.jpg", title:"Minneapolis, Minnesota"}, 
        {href:"images/cancun.jpg", title:"Cancun, Mexico"},
        {href:"images/miami.jpg", title:"Miami, Florida"},
        {href:"images/pheonix.jpg", title:"Pheonix, Arizona"},
        {href:"images/las_vegas.jpg", title:"Las Vegas, Nevada"}
    ];
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
    
    evt.attach($("play_pause"), "click", slideshow.togglePlay); 
    evt.attach($("change_speed"), "click", slideshow.changeSpeed); 
};