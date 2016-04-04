/**
 * Created by mkulinski on 3/31/2016.
 */
$(document).ready(function(){
    var firstNum;
    var secondNum;
    var total;

    //puts numbers on the screen
    $('.num').click(function() {
       var number = $(this).val();
        $('.showNum').val($('.showNum').val() + number);
    });

    $('.minus').click(function() {
        if ($('.showNum').hasClass('ready')){
            secondNum = parseInt($('.showNum').val());
            total = firstNum - secondNum;
            $('.showNum').val(total);
            $('.showNum').removeClass('ready');

        } else {
            firstNum = parseInt($('.showNum').val());
            $('.showNum').val('');
            $('.showNum').addClass('ready');
        }
    });

    $('.plus').click(function() {
        if ($('.showNum').hasClass('ready')){
            secondNum = parseInt($('.showNum').val());
            total = firstNum + secondNum;
            $('.showNum').val(total);
            $('.showNum').removeClass('ready');
        } else {
            firstNum = parseInt($('.showNum').val());
            $('.showNum').val('');
            $('.showNum').addClass('ready');
        }
    });

    $('.mult').click(function() {
        if ($('.showNum').hasClass('ready')){
            secondNum = parseInt($('.showNum').val());
            total = firstNum * secondNum;
            $('.showNum').val(total);
            $('.showNum').removeClass('ready');
        } else {
            firstNum = parseInt($('.showNum').val());
            $('.showNum').val('');
            $('.showNum').addClass('ready');
        }
    });

    $('.divide').click(function() {
        if ($('.showNum').hasClass('ready')){
            secondNum = parseInt($('.showNum').val());
            total = firstNum / secondNum;
            $('.showNum').val(total);
            $('.showNum').removeClass('ready');
        } else {
            firstNum = parseInt($('.showNum').val());
            $('.showNum').val('');
            $('.showNum').addClass('ready');
        }
    });

    $('.op').click(function() {
        var lastClick = $(this).val();
        $('.lastOp').val(lastClick);
    });

    $('.equals').click(function() {
        secondNum = parseInt($('.showNum').val());
        $('.showNum').removeClass('ready');
        if ($('.lastOp').val() == '-'){
            total = firstNum - secondNum;
            $('.showNum').val(total);
        } else if ($('.lastOp').val() == '+'){
            total = firstNum + secondNum;
            $('.showNum').val(total);
        } else if ($('.lastOp').val() == '/'){
            total = firstNum / secondNum;
            $('.showNum').val(total);
        } else if ($('.lastOp').val() == '*'){
            total = firstNum * secondNum;
            $('.showNum').val(total);
        }
    });




});