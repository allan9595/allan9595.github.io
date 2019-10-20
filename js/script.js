//click modal and trigger modal


$('.card-back button').click((e) => {
    $(e.target).parent().parent().parent().next().addClass('show')
})

//close the modal

$('.btn-close').click((e) => {
    $(e.target).parent().parent().removeClass('show');
})

//remove the model outside when click outside the window
$('body').click((e) => {
    if($(e.target)[0].className == 'model show'){
        $('.model').removeClass('show');
    }
})

//click previous, got to previous modal
$('.previous').click((e) => {
    //console.log($(e.target).parent().parent().parent().prev().prev());
    $(e.target).parent().parent().parent().removeClass('show');
    $(e.target).parent().parent().parent().prev().prev().addClass('show');
})

//click forward, got to next modal
$('.forward').click((e) => {
    //console.log($(e.target).parent().parent().parent().prev().prev());
    $(e.target).parent().parent().parent().removeClass('show');
    $(e.target).parent().parent().parent().next().next().addClass('show');
})