/**
 * Created by Sony on 12.08.14.
 */
//$(document).ready(function(){
//    slideShow();
//})
//
//function slideShow(){
//    var current = $('#slider .show');
//    var next = current.next().length ? current.next() : current.siblings().first();
//
//    current.hide().removeClass('show');
//    next.fadeIn().addClass('show');
//
//    setTimeout(slideShow, 5000);
//}
//$(document).ready(function(){
//    rotatePics(1);
//})
//
//function rotatePics(CurrentPhoto){
//    var numberOfPhotos = $('#slider img').length;
//    CurrentPhoto = CurrentPhoto % numberOfPhotos;
//
//$('#slider img').eq(CurrentPhoto).fadeOut(function(){
//    $('#slider img').each(function(i){
//        $(this).css(
//            'zIndex',((numberOfPhotos-i) + CurrentPhoto) % numberOfPhotos);
//    });
//    $(this).show();
//    setTimeout(function(){
//        rotatePics(++CurrentPhoto);}, 4000);
//})
//}

$('#slider').cycle({
    fx: 'scrollRight',
    next: '#slider'

});





