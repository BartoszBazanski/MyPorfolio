$(function(){
    var top = $("#top");
    var right = $("#right");
    var bottom = $("#bottom");
    var left = $("#left");
    var menu = $("#round-menu");
    var menuButtons = $('.menu-button');
    var description = $('.description');
    // description.addClass('hidden');

    // menuButtons.hover(function(event){
    //     $(this).next('.description').addClass('visible').removeClass('hidden')
    //     },function(){
    //         $(this).next('.description').addClass('hidden').removeClass('visible');
    //     });

    top.click(function(){
        AnimateRotate(menu, 405);
        AnimateRotate(description, 0);
        AnimateRotate(description, -45);
    })
    right.click(function(){
        AnimateRotate(menu, 675);
        AnimateRotate(description, 0);
        AnimateRotate(description, 45);
    })
    bottom.click(function(){
        AnimateRotate(menu, 585);
        AnimateRotate(description, 0);
        AnimateRotate(description, -225);
    })
    left.click(function(){
        AnimateRotate(menu, 495);
        AnimateRotate(description, 0);
        AnimateRotate(description, -135);
    })
    //Fading in texts
    var hello = $('#text-content h2');
    hello.hide();
    var greeting = $('#text-content p');
    greeting.hide();
    hello.fadeIn(1500);
    greeting.delay(2000).fadeIn(1500);

});
function AnimateRotate(obj, angle){
    var start = getRotationDeg(obj);
    $({deg: start}).animate({deg: angle}, {
        duration: 2000,
        ease: "ease-in",
        step: function(now){
            obj.css({
                transform: 'rotate('+ now +'deg)'
            });
        }
    });
};
function getRotationDeg(obj){
    var matrix = obj.css("transform");
    var values = matrix.split('(')[1].split(')')[0].split(',');
    var angle = Math.round(Math.atan2(values[1], values[0]) * (180/Math.PI));
    return (angle < 0) ? angle + 360 : angle;
};