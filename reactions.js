// test your reactions
$(window).on("load", buttonStart);
console.log("siteLoaded");



function buttonStart() {
    console.log("buttonStart");




    $("#start").css("display", "block");
    $("#stop").css("display", "none");


    $("#start").on("click", gameStart);




};




function gameStart() {
    console.log("gameStart");

    $("#start").css("display", "none");
    $("#stop").css("display", "block");

    $("#stop").on("click", function () {

        location.reload();

    });

    var start = new Date().getTime();

    function randomColor() {
        console.log("randomColor");

        var letters = "0123456789ABCDEF".split("");

        var color = "#"

        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];

        }

        return color;
    }

    function makeShapeAppear() {
        console.log("makeShapeAppear");


        var top = Math.random() * 400;

        var left = Math.random() * 600;

        var width = (Math.random() * 200) + 100;

        if (Math.random() > 0.5) {

            $("#shape").css("border-radius", "50%");

        } else {

            $("#shape").css("border-radius", "0%");
        }


        $("#shape").css("background-color", randomColor);

        $("#shape").css("top", top + "px");

        $("#shape").css("left", left + "px");

        $("#shape").css("width", width + "px");

        $("#shape").css("height", width + "px");

        $("#shape").css("display", "block");

        start = new Date().getTime();


    }

    function appearAfterDelay() {
        console.log("appearAfterDelay");

        setTimeout(makeShapeAppear, Math.random() * 2000);
    }

    appearAfterDelay();

    $("#shape").on("click", function () {
        console.log("clickedShape");



        $("#shape").css("display", "none");

        var end = new Date().getTime();

        var timeTaken = (end - start) / 1000;

        $("#timeTaken").html(timeTaken + "s");

        appearAfterDelay();
    })
}
