$("button").click(function () {

    $("h1").addClass("big-title")

    setTimeout(function () {
        $("h1").removeClass("big-title");
    }, 200);
})

$(document)
    .keydown(function (event) {

        $("h1").addClass("big-title").text(event.key)

    })
    .keyup(function () {

        $("h1").removeClass("big-title").text("Hello");

    });

$("h1")
    .on("mouseover", function () {
        $("h1").addClass("big-title")
    })
    .mouseleave(function () {
        $("h1").removeClass("big-title")
    });

// before()
// after()

// prepend()
// append()

// Animation
// toggle
