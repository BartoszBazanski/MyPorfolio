$(function(){
    var top = $("#top");
    var right = $("#right");
    var bottom = $("#bottom");
    var left = $("#left");
    var menu = $("#round-menu");
    top.click(function(){
        AnimateRotate(menu, 405);
    })
    right.click(function(){
        AnimateRotate(menu, 675);
    })
    bottom.click(function(){
        AnimateRotate(menu, 585);
    })
    left.click(function(){
        AnimateRotate(menu, 495);
    })
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