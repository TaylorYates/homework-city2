// FUNCTIONS REQUIRED:
// A WAY TO ADD THE CITY (AND AN EACH LOOP TO CALL IT)
// A WAY TO CHANGE THE BACKGROUND (ALSO A WAY TO CALL THIS)

var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

function addCity() {
  $("select").append("<option>" + this + "</option>");
}

function changeBackground() {
  var selectedCity = $("select").val();

  if (selectedCity == cities[0]) {
    $("body").attr("class", "NYC");
  }
  else if (selectedCity == cities[1]) {
    $("body").attr("class", "SF");
  }
  else if (selectedCity == cities[2]) {
    $("body").attr("class", "LA");
  }
  else if (selectedCity == cities[3]) {
    $("body").attr("class", "ATX");
  }
  else if (selectedCity == cities[4]) {
    $("body").attr("class", "SYD");
  }

  // OR
  // $("body").attr("class", selectedCity);
}

function start() {
  $(cities).each(addCity);
  $("select").change(changeBackground);
}




// If .choose city[0] run attr change to ny thing
//
// Else if .choose city[1] change to la thing
//
// Or is .choose the call code? Look at api sheets for JQuery. If that's the case it would be:
//
// If city[0] do the New York change
// And call is:
// $.this("select").choose(changeBackground); ????? Do I use this here?

$(document).ready(start);
