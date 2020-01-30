
$(document).ready(function(){
    $('.gallery-photo').hover(
        function() {
            $(this).addClass('animated flipOutY');
        },function() {
            $(".gallery-text").addClass('animated flipInY k');
        }
    );
});
$(document).ready(function(){
    $('.footer-content').hover(
        function() {
            $(this).addClass('animated shake');
        }
    );
});
