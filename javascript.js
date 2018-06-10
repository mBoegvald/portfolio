$(".item1").hover(function () {
    if ($(".item1").is(":hover")) {
        $(".hover_text1").html("01.04.04 - Responsive_site_v3");
        $(".hover_text1").fadeTo("1s", 1.0);

    } else {

        $(".hover_text1").fadeTo("1s", 0.0);

    };
});

$(".item2").hover(function () {
    if ($(".item2").is(":hover")) {
        $(".hover_text2").html("Everyday - CPH DOX");
        $(".hover_text2").fadeTo("1s", 1.0);

    } else {

        $(".hover_text2").fadeTo("1s", 0.0);

    };
});

$(".item3").hover(function () {
    if ($(".item3").is(":hover")) {
        $(".hover_text3").html("03.02.01 - Redesign");
        $(".hover_text3").fadeTo("1s", 1.0);

    } else {

        $(".hover_text3").fadeTo("1s", 0.0);

    };
});

$(".item4").hover(function () {
    if ($(".item4").is(":hover")) {
        $(".hover_text4").html("02.01.02 - Beskrivelse af stil og skitser");
        $(".hover_text4").fadeTo("1s", 1.0);

    } else {

        $(".hover_text4").fadeTo("1s", 0.0);

    };
});

$(".item5").hover(function () {
    if ($(".item5").is(":hover")) {
        $(".hover_text5").html("02.01.04 - Baggrund og figurer");
        $(".hover_text5").fadeTo("1s", 1.0);

    } else {

        $(".hover_text5").fadeTo("1s", 0.0);

    };
});

$(".item6").hover(function () {
    if ($(".item6").is(":hover")) {
        $(".hover_text6").html("02.03.01 - Lydsiden");
        $(".hover_text6").fadeTo("1s", 1.0);

    } else {

        $(".hover_text6").fadeTo("1s", 0.0);

    };
});

$(".item7").hover(function () {
    if ($(".item7").is(":hover")) {
        $(".hover_text7").html("02.03.03 - Animations-opgaven");
        $(".hover_text7").fadeTo("1s", 1.0);

    } else {

        $(".hover_text7").fadeTo("1s", 0.0);

    };
});

$(".item8").hover(function () {
    if ($(".item8").is(":hover")) {
        $(".hover_text8").html("02.05.01 - Sex & Samfund animation");
        $(".hover_text8").fadeTo("1s", 1.0);

    } else {

        $(".hover_text8").fadeTo("1s", 0.0);

    };
});

$(".item9").hover(function () {
    if ($(".item9").is(":hover")) {
        $(".hover_text9").html("04.02.01 - KeaAPP");
        $(".hover_text9").fadeTo("1s", 1.0);

    } else {

        $(".hover_text9").fadeTo("1s", 0.0);

    };
});

$(".item10").hover(function () {
    if ($(".item10").is(":hover")) {
        $(".hover_text10").html("04.03.02 - Joe & the Juice loyalty app");
        $(".hover_text10").fadeTo("1s", 1.0);

    } else {

        $(".hover_text10").fadeTo("1s", 0.0);

    };
});

$(".item11").hover(function () {
    if ($(".item11").is(":hover")) {
        $(".hover_text11").html("04.03.03 - Loyalty app præsentation");
        $(".hover_text11").fadeTo("1s", 1.0);

    } else {

        $(".hover_text11").fadeTo("1s", 0.0);

    };
});


$(".item12").hover(function () {
    if ($(".item12").is(":hover")) {
        $(".hover_text12").html("Test your reflexes!");
        $(".hover_text12").fadeTo("1s", 1.0);

    } else {

        $(".hover_text12").fadeTo("1s", 0.0);

    };
});

var content = 1;

$("#circle").on("click", function () {
    console.log("circle clicked");



    if (content == 1) {
        console.log("content 1");
        $(".content1").css("opacity", "0");
        $(".content2").css("opacity", "1");
        $("#circle").css("background-image", "url('pics/fill_right-01.png')")
        $(".content2").css("z-index", "8");

        content = 2;

    } else {
        $(".content1").css("opacity", "1");
        $(".content2").css("opacity", "0");
        $("#circle").css("background-image", "url('pics/fill_left-01.png')")
        $(".content2").css("z-index", "6");

        content = 1;

    }
});



var picNumb = 1;
$(".foer_efter").on("click", function () {
    console.log("Clicked");

    if (picNumb == 1) {
        console.log("Billede 1");
        $(".foer_efter").attr("src", "pics/sshbiler_efter.png");



        picNumb = 2;

    } else {
        console.log("Billede 2");

        $(".foer_efter").attr("src", "pics/sshbiler_hjemmeside.png");


        picNumb = 1;
    }
});
