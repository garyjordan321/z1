jQuery(function($) {
    var selectedClass = "";
    $(".filter-button").click(function(e){
        e.preventDefault();
        selectedClass = $(this).attr("data-tag");
        console.log(selectedClass);
        $(".innoscale-gallery ul.gallery").fadeTo(100, 0.1);
        $("ul.gallery li").not("."+selectedClass).fadeOut().removeClass('innoscale-gallery-animate');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('innoscale-gallery-animate');
            $(".innoscale-gallery ul.gallery").fadeTo(300, 1);
        }, 300);

    });
});