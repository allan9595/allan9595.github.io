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

if($(window).width() < 768){
    //toggle the navbar menu
    $('#header .menu-open').click(() => {
        $('#header .menu-open').toggle();
        $('#header .menu-close').toggle();
        $('#navbar').slideDown(200);
    })

    $('#header .menu-close').click(() => {
        $('#header .menu-close').toggle();
        $('#header .menu-open').toggle();
        $('#navbar').slideUp(100);
    })

    $('#navbar ul li a').click(() => {
        $('#header .menu-close').toggle();
        $('#header .menu-open').toggle();
        $('#navbar').slideUp(100);
    })

    // When the user scrolls the page, execute myFunction
    window.onscroll = () =>  {
        createSticky()
    };

    // Get the header
    var header = document.getElementById("header");
    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    const createSticky = () => {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}


//open the side bar under the tablet and above
if($(window).width() >= 768){
    $('#header .menu-open').click(() => {
        document.getElementById("navbar__inner").style.width = "250px";
        document.getElementById("container").style.marginLeft = "250px";
        $('#navbar__inner').prepend(
            `
            <svg 
                class="menu-close-sidebar"
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
            </svg>
            `
        )
    })

    // // When the user scrolls the page, execute myFunction
    // window.onscroll = () =>  {
    //     createSticky()
    // };

    // // Get the header
    // var header = document.getElementById("header");
    // // Get the offset position of the navbar
    // var sticky = header.offsetTop -100;

    // // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    // const createSticky = () => {
    //     if (window.pageYOffset  > sticky) {
    //         header.classList.add("sticky");
    //     } else {
    //         header.classList.remove("sticky");
    //     }
    // }
}


