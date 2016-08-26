var inputString;
var cleanString;
var outputString = [];
var finalString = [];

var print = function(inputString) {
  // remove all symbols and separate by commas with quotes
  // cleanString = inputString.replace(/[^a-zA-Z ]/g, "");
  // outputString = '\"' + cleanString.split(' ').join('\", \"') + '\"';

  cleanString = inputString.split(",");
  outputString = cleanString.map(function(e) {
    return e.trim();
  });
  for (var i = 0, len = outputString.length; i < len; i++) {
    finalString.push('"' + outputString[i] + '"');
  };
  $("ul#results").append("<li>" + finalString + "</li>");
//  $("input#userEntry").val() = '';
}

$(document).ready(function() {
  $("form#entry").submit(function(event) {
    inputString = $("input#userEntry").val();
    $("ul#results").empty();
    print(inputString);
    $("input#userEntry").val("");
    event.preventDefault();
  });
});

// "Beef", " Peas", "  Dried Whole Egg", " Potatoes", "  Pea Protein", " Pork Meat Meal", "  Beef Liver", " Sweet Potatoes", " Dried Tomato Pomace", " Salmon Oil", "  Flaxseed", " Cheese", " Carrots", " Broccoli", " Cauliflower", "  Apples", "  Green Beans", " Pork Cartilage", " Potassium Chloride", " Cranberries", " Blueberries", " Salt", " Chicory Root Extract", " Alfalfa Sprouts", " Celery", "  Lettuce", " Watercress", "  Spinach", " Yucca Schidigera Extract", "  Sodium Selenite", " Folic Acid", "  Taurine", " Parsley", " Sorbic Acid (Preservative)", "  Vitamins", " Minerals", " Probiotics."
