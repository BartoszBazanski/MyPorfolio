$(function(){
    function slideToSection(section){
        var id = section.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 2000);
    }
    var sectionButtons = $('.navigation a');
    sectionButtons.click(function(e){
        e.preventDefault();
        slideToSection($(this));
    })
});