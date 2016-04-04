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

    //allows you to subtract numbers
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

    //allows you to add numbers
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

    //allows you to multiply numbers
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

    //allows you to divide numbers
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

    //uses the last operator to decide what to do with the two numbers entered
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

    //clears the screen
    $('.clear').click(function() {
        firstNum = 0;
        secondNum = 0;
        total = 0;
        $('.showNum').val('');
    });

    //keeps track of the last operator clicked
    $('.op').click(function() {
        var lastClick = $(this).val();
        $('.lastOp').val(lastClick);
    });

});