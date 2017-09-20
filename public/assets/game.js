$(function() {
    var serverAnswerBox = $("#serverAnswer");
    var playerAnswerInput = $("#userAnswer");
    var renewButton = $("#renewButton");
    var checkingButton = $("#checkingButton");


    $("form").on("submit", function(ev) {
        ev.preventDefault();

        var playerAnswer = {guess:  parseInt(playerAnswerInput.val())};


        $.ajax({
            type: "POST",
            url: "/",
            data: playerAnswer,
            success: function(result) {
                serverAnswerBox.css("display", "block");
                $("#serverAnswer").html(result);
                if (result == "You got this! Gratulations!") {
                    renewButton.css("display", "block");
                    playerAnswerInput.css("display", "none");
                    checkingButton.css("display", "none");
                }
            }
        })

    })


    // to show the player that server checking his proposition again
    playerAnswerInput.on("focus", function() {
        serverAnswerBox.css("display", "none");

    })

    // just for pretending that player actually "restart" server :D
    renewButton.on("click", function() {
        renewButton.css("display", "none");
        serverAnswerBox.css("display", "none");
        playerAnswerInput.css("display", "block");
        playerAnswerInput.val("");
        checkingButton.css("display", "block");

    })

});

