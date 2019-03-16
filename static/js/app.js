/* data route */
var url = "/data";

function buildPlot() {
  d3.json(url).then(function(response) {

    console.log(response);
    var trace = {
      name: "Bigfoot Sightings",
      x: response[0],
      y: response[1]
    };

    var data = [trace];

    var layout = {
      title: "Bigfoot Sightings Per Year",
      xaxis: {
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);
  });
}

buildPlot();
