/**
 * Created by mkulinski on 3/31/2016.
 */
$(document).ready(function(){
    var totalVal = '';

    $('.num').click(function(){
        var value = $(this).val();
        totalVal = $('.showNum').val($('.showNum').val() + value).val();

        //once you click add it grabs the value at the time, clears out showNum
        //once you hit equals it adds the two numbers
        var val1 = '';

        $('.add').click(function() {
            val1 = parseInt(totalVal);
            $('.showNum').val('');

            $('.eq').click(function() {
                $('.showNum').val(val1+parseInt(totalVal));
            });

        });
    });


    //clear value
    $('.clear').click(function() {
       $('.showNum').val('');
        totalVal = '';
    });

});