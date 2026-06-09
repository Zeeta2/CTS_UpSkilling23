$(document).ready(function () {

    $("#registerBtn").click(function () {

        $("#eventCard").fadeOut(1000);

        setTimeout(function () {
            $("#eventCard").fadeIn(1000);
        }, 1000);

    });

});