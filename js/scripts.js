var inputString;
var cleanString;
var outputString = [];

var print = function(inputString) {
  //remove all symbols and separate by commas with quotes
  // cleanString = inputString.replace(/[^a-zA-Z ]/g, "");
  // outputString = '\"' + cleanString.split(' ').join('\", \"') + '\"';

  cleanString = inputString.split(",");
  for (var i = 0, len = cleanString.length; i < len; i++) {
    outputString.push(" " + '"' + cleanString[i] + '"');
  };
  console.log(cleanString[0]);
  console.log(cleanString[1]);
  $("ul#results").append("<li>" + outputString + "</li>");
//  $("input#userEntry").val() = '';
}

$(document).ready(function() {
  $("form#entry").submit(function(event) {
    inputString = $("input#userEntry").val();
    $("ul#results").empty();
    print(inputString);
    event.preventDefault();
  });
});
