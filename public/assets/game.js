$(function() {
    $("form").on("submit", function(ev) {
        ev.preventDefault();
        
        var playerAnswerInput = $("#userAnswer");
        var playerAnswer = {guess:  parseInt(playerAnswerInput.val())};
        
//        var playerAnswer = parseInt($("#userAnswer").val());
        console.log(playerAnswer);
        
        $.ajax({
            type: "POST",
            url: "/game",
            data: playerAnswer          
        })
    })
    
});

