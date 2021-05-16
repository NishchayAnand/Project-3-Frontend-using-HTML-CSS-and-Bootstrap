// animation effect on .rect div elements

console.log(Math.ceil(1024.5));

let nCount = selector => {

    $(selector).each(function () {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function (value) {
                $(this).text(Math.ceil(value));
            }
        });
    });
};

$(window).scroll(function () {
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        nCount(".rect > h1");
    }
});

// Sticky navigation bar

$(window).scroll(function () {
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        $(".navbar").addClass("sticky");
    } else {
        $(".navbar").removeClass("sticky");
    }
});
l