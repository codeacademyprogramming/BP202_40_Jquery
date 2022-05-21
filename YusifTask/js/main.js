$(function(){
    $('#btn').click(function(){
        var li = $('<li></li>');
        $(li).addClass('list-group-item');
        var val = $('#input').val();
        $(li).text(val);
        $('.list-group').append(li);
        $('#input').val('');
    })
})