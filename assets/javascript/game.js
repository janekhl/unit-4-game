$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var targetNumber = Math.floor(Math.random() * 120) + 19;
    var crystals = $("#crystals");
    var counter = 0;
    var numberOptions = [Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1];
    $("#number-to-guess").text(targetNumber);
    $("#times-won").text(wins);
    $("#times-lost").text(losses);
    
    function resetGame() {
        var numberOptions = [Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1];
        var targetNumber = Math.floor(Math.random() * 120) + 19;
        $("#number-to-guess").text(targetNumber);
        $("#times-won").text(wins);
        $("#times-lost").text(losses);
    }

    for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        crystals.append(imageCrystal);
    }

    crystals.on("click", ".crystal-image", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        alert("New score: " + counter);
        if (counter === targetNumber) {
        alert("You win!");
        wins ++;
        resetGame();
        counter=0;
        }
        else if (counter >= targetNumber) {
        alert("You lose!!");
        losses ++;
        resetGame();
        counter=0;
        }

    });

});
