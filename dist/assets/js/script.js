$(()=> {
    var includes = $('[data-include]');
    $.each(includes, function () {
        var file = './' + $(this).data('include');
        $(this).load(file);
    });

})



