// from data.js
var tableData = data;

// YOUR CODE HERE!


var tbody = d3.select("tbody")
data.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


d3.select("#filter-btn").on("click", function() {
    var input = d3.select(".form-control").property("value")
    console.log(input)
    var filteredData = tableData.filter(value => value.datetime === input)
    tbody.html("")
    filteredData.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
})