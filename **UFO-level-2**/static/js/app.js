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
    console.log("This button is redundant now")
})

d3.select(".form-control").on("change", function() {
    var input = d3.select(".form-control").property("value")
    var dropDownMenu = d3.select("#selDataSet")
    var dataSelector = dropDownMenu.property("value")
    if (dataSelector === 'Date') {
        var filteredData = tableData.filter(value => value.datetime === input)
    } else if (dataSelector === 'City') {
        var filteredData = tableData.filter(value => value.city === input)
    }
    tbody.html("")
    filteredData.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
})

// var date = filteredData.map(value => value.datetime)
// var city = filteredData.map(value => value.city)
// var state = filteredData.map(value => value.state)
// var country = filteredData.map(value => value.country)
// var shape = filteredData.map(value => value.shape)
// var duration = filteredData.map(value => value.durationMinutes)
// var comments = filteredData.map(value => value.comments)
// console.log(city)