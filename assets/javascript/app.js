console.log("connected");

$(document).ready(function () {

    //target each gem as a random value

    //crystal variables
    var crystal = {

        green: {
            name: "green",
            value: 0
        },

        blue: {
            name: "blue",
            value: 0
        },

        pink: {
            name: "pink",
            value: 0
        },

        orange: {
            name: "orange",
            value: 0
        }

    }

    //set variables for current and target scores
    var currentScore = 0;
    var targetScore = 0;

    //set variables for wins and losses 
    var wins = 0;
    var losses = 0;

    //Functions
    //=====================

    //Set the computer to calculate a random number between..
    //1 - 12 to use as the crystal's values

    var getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    //Now the getRandom is a number random generator

    //Start the game function

    var startGame = function () {

    //current score starts at 0
    currentScore = 0;

    //set a new target score - the get random generator is called to insert 19, 120 for min and max
    targetScore = getRandom (19, 120);

    //go into the var crystals and target their values to change
    crystal.green.value = getRandom (1, 12);
    crystal.blue.value = getRandom (1,12);
    crystal.pink.value = getRandom (1, 12);
    crystal.orange.value = getRandom (1, 12);

    //they will all be a random value between 1 and 12

    //grab the html elements to print the scores to
    $("#target-score").text(targetScore);
    $("#current-score").text(currentScore);

    //console log all of the elements 
    console.log("Target score is" + targetScore);
    console.log("The current score is" + currentScore);
    console.log("Green" + crystal.green.value);
    console.log("Blue" + crystal.blue.value);
    console.log("Pink" + crystal.pink.value);
    console.log("Orange" + crystal.oragne.value);


    }




});