//BUSINESS LOGIC

let ouncesToGrams = function(userInput) {
  return userInput * 28.35;
};

let cupsToPints = function(userInput) {
  return userInput / 2;
};


//USER INTERFACE


$(document).ready(function() {
  // OZ TO GRAMS
  $("#oztograms").submit(function(event) {
    event.preventDefault();
    let userInput = parseInt($("#ounces").val());
    let result = ouncesToGrams(userInput);
    $("#gram-output").text(result);
  });

  // CUPS TO PINTS
  $("#cuptopints").submit(function(event) {
    event.preventDefault();
    let userInput = parseInt($("#cups").val());
    let result = cupsToPints(userInput);
    $("#pint-output").text(result);
    // BUG - IF CUPS IS 0.5, PINTS RESULT IS 0, BUT SHOULD BE 0.25
    // NEED TO SPECIFY NUMBER OF DECIMALS FOR RESULT/OUTPUT
  });

  // GALLONS TO LITERS
  $("#galtoliters")

  // CREATE A FUNCTION TO CLEAR FIELD WHEN USER HITS CLEAR BUTTON
  // $("button.clear").click(function() {
  //   $(".clear-field").text("");
  // });

});