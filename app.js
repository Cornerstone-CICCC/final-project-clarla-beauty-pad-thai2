$(function(){
    $(".event-type-option").on('click', function(){
        $(".event-type-option").removeClass("is-selected");
        $(this).addClass("is-selected");
    })
})
