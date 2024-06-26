$(document).ready(function () {
    $("#dark").click(function () {
        $("#dark,#updark").fadeOut(200)
        $("#light,#uplight").fadeIn(200)
        $("#head,footer").css("background-color", "#2f3229")
        $("#link li,.card,#about,.album").css("background-color", "#3e4136")
        $("body").css("background-color", "#4d4739")
        $("body,a").css("color", "#dfdfdf")
        $("#link li,.card").mouseenter(function () {
            $(this).css("background-color", "#575c4a")
        })
        $("#link li,.card").mouseleave(function () {
            $(this).css("background-color", "#3e4136")
        })
    })
    $("#light").click(function () {
        $("#light,#uplight").fadeOut(200)
        $("#dark,#updark").fadeIn(200)
        $("#head,footer").css("background-color", "#C4DFDF")
        $("#link li:hover,.card:hover").css("background-color", "#D2E9E9")
        $("#link li,.card,#about,.album").css("background-color", "#E3F4F4")
        $("body").css("background-color", "#F8F6F4")
        $("body,a").css("color", "black")
        $("#link li,.card").mouseenter(function () {
            $(this).css("background-color", "#D2E9E9")
        })
        $("#link li,.card").mouseleave(function () {
            $(this).css("background-color", "#E3F4F4")
        })
    })
    $("#card1").click(function () {
        $(".album").fadeOut(200)
        $("#1").fadeIn(200)
    })
    $("#card2").click(function () {
        $(".album").fadeOut(200)
        $("#2").fadeIn(200)
    })
    $("#card3").click(function () {
        $(".album").fadeOut(200)
        $("#3").fadeIn(200)
    })
    $("#card4").click(function () {
        $(".album").fadeOut(200)
        $("#4").fadeIn(200)
    })
})