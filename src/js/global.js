//nav-drop
$('.nav__elem_before').hover(function() {
    $(this).toggleClass('active');
}
);
$('.nav__elem').hover(function() {
    $($(this).data('target')).toggleClass('active');
}
);