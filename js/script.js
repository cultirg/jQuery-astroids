var url ="https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=4YoBP3sl3TgfUbekkDJV8c0Bxf8BjJDHRComw5yD";

$.ajax({
  url: url,
  success: function(results) {
    $("#count").html(results.element_count);
    // Below dors the exact same thing, but more longer / ungainly
    // document.getElement.Id{"count"}.inner.HTML = results.element_count

    var asteroids = results.near_earth_objects["2015-09-08"];
    var asteroids;
    var currentRow;
    for(var i = 0; i < asteroids.length; i ++){

      if (i % 3 === 0){
        currentRow = $("<div></div>").addClass("row");
        $(".container").append(currentRow);
        }
        makeName(asteroids[i], currentRow);

      }
    }
});

// function creates a column sontaining the astroids name
function makeName(asteroids, row) {
  var column = $("<div></div>").addClass("col-md-4");
  var name = $("<h3></h3>").html(asteroids.name);

  $(column).append(name);
  $(row).append(column);

}
