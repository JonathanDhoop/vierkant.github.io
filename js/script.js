$("#jumpscare").hide();
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let size = 100;
let mainLoopId = setInterval(function(){
    $("div").each(function(){
    $(this).css("background-color", getRandomColor());
});
$(".vierkant").css("border", "5px solid "+getRandomColor())
$("body").css("background-color", getRandomColor());
playSound("sounds/change.mp3");
}, 1000);
let mainLoopId2 = setInterval(function(){
    size+=0.5;
    if(size > 1000)
    {
        size = 100;
    }
    $(".vierkant").css("width", size+"px");
    $(".vierkant").css("height", size+"px");
}, 1);
let song = new Audio("sounds/song.mp3");
let playSong = function()
{
    if(song.paused)
    {
        song.play();
    }
}
$('#playSong').on("click", playSong);

let mainLoopId3 = setInterval(function(){
    setTimeout(function(){$("#jumpscare").show();},300);
    let jumpscareSound = new Audio("sounds/jumpscare.mp3");
    jumpscareSound.play();
    setTimeout(function(){$("#jumpscare").hide();},2000);
}, 10000);