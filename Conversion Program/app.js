/**
  This program converts an impromperly formatted data file to a json file that the globe accepts.
  Changing the "rounding" variable allows the final json file to contain different amount of significant figures after the decimal point for the latitude and longitude.
  The document is then downloaded immediately with the name "data.json" and used as the data file for the final globe.
*/

var combined = {};
var final_data = [];
var rounding = 6;

function download(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  pom.setAttribute('download', filename);

  if (document.createEvent) {
    var event = document.createEvent('MouseEvents');
    event.initEvent('click', true, true);
    pom.dispatchEvent(event);

  } else {
    pom.click();

  }
}

for (var i=0; i < data.length; i++) {
  var item = data[i];
  var key;

  key = (Math.round(item.latitude * Math.pow(10, rounding)) / Math.pow(10, rounding)) + "," + (Math.round(item.longitude * Math.pow(10, rounding)) / Math.pow(10, rounding));

  if (!combined[item.iyear]) {
    combined[item.iyear] = {};
  }

  if(!combined[item.iyear][key]) {
    combined[item.iyear][key] = 0;
  }

  combined[item.iyear][key] += 0.03;
}

for (var year in combined) {
  var year_data = [];
  var numbers_data = [];

  for (var coord in combined[year]) {
    var split = coord.split(",");
    numbers_data.push(parseFloat(split[0]));
    numbers_data.push(parseFloat(split[1]));
    numbers_data.push(combined[year][coord]);
  }

  year_data.push(year);
  year_data.push(numbers_data);

  final_data.push(year_data);
}

console.log(combined);
console.log(final_data);

download('data.json', JSON.stringify(final_data));
