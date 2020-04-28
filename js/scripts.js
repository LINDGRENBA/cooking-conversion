//BUSINESS LOGIC

let ouncesToGrams = function(userInput) {
  return userInput * 28.35;
};

let cupsToPints = function(userInput) {
  return userInput / 2;
};

let galToLiters = function(userInput) {
  return userInput * 4;
};


//USER INTERFACE


$(document).ready(function() {
  // OZ TO GRAMS
  $("#oztograms").submit(function(event) {
    event.preventDefault();
    let userInput = parseFloat($("#ounces").val());
    let result = ouncesToGrams(userInput);
    $("#gram-output").text(result.toFixed(2));
  });

  // CUPS TO PINTS
  $("#cuptopints").submit(function(event) {
    event.preventDefault();
    let userInput = parseFloat($("#cups").val());
    let result = cupsToPints(userInput);
    $("#pint-output").text(result.toFixed(2));
    // BUG - IF CUPS IS 0.5, PINTS RESULT IS 0, BUT SHOULD BE 0.25
    // NEED TO SPECIFY NUMBER OF DECIMALS FOR RESULT/OUTPUT - DID THIS AND IT STILL DOES NOT SOLVE THE PROBLEM. 
  });

  // GALLONS TO LITERS
  $("#galtoliters").submit(function(event) {
    event.preventDefault();
    let userInput = parseFloat($("#gallons").val());
    let result = galToLiters(userInput);
    $("#liter-output").text(result.toFixed(2));
  });

  // CREATE A FUNCTION TO CLEAR FIELD WHEN USER HITS CLEAR BUTTON
  // $("button.clear").click(function() {
  //   $(".clear-field").text("");
  // });

});