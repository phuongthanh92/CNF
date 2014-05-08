/**
 * Created by PhuongThanh92 on 5/7/14.
 */
$(document).ready(function(){
    var list = $('#sidebar ul').children();
    list.click(function(){
        list.removeClass('active');
        $(this).addClass("active");
    })
})