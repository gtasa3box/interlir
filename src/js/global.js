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
