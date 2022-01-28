//nav-drop
$('.nav__elem_before').hover(function() {
    $(this).toggleClass('active');
}
);
$('.nav__elem').hover(function() {
    $($(this).data('target')).toggleClass('active');
}
);

//burger 
$('.burger').click(function() {
    $(this).toggleClass('active');
    $('body').toggleClass('hidden');
    $('.header__elem').toggleClass('active');
    }
);
//nav-about
$('#nav-about').click(function() {
    $('body').removeClass('hidden');
    $('.header__elem').removeClass('active');
    $('.burger').removeClass('active');
    }
);

//dropdown-content 
$('.dropdown__title').on('click', function(){
    $(this).toggleClass('active') 
    $($(this).data('target')).stop(true, false).slideToggle()  
});
