
function processData(nationsData) {
    //alert("Data Loaded");
    var first_country = nationsData[0];
    //alert(first_country.region);

    var mySvg = d3.select("#mygraf");
    var myCircle = mySvg.append("circle");
    myCircle.attr("cx", 300);
    myCircle.attr("cy", 10);
    myCircle.attr("r", 10);

    mySvg.attr("width", "800px");
    mySvg.attr("height", "600px");

    var xScale = d3.scale
	.log()
	.domain([300, 1e5])
	.range([0, 800]);
    var yScale = d3.scale
	.linear()
	.domain([10, 85])
	.range([600, 0]);
    var sizeScale = d3.scale
	.sqrt()
	.domain([0, 1e8]) // population
	.range([0, 30]); // pixels (radius)
    
    var year_idx = 0; // 0 is 1950
    var allCircles = mySvg.selectAll(".circ")
        .data(nationsData, function(d) {
	    return d.name;
	});
    allCircles.enter()
	.append("circle")
        .attr("cx", function(d) {
	    return xScale(d.income[year_idx]);
	})
        .attr("cy", function(d) {
	    return yScale(d.lifeExpectancy[year_idx]);
	})
        .attr("r", function(d) {
	    return sizeScale(d.population[year_idx]);
	})
        .attr("class", "circ");

}

//alert("before loading");
d3.json("https://raw.githubusercontent.com/twitwi/2015-07-27-data/master/d3/nations.json", processData);


// old code to test (one line comment)

/* multiline comment
alert("hello graph");
alert(3.141 * 2);
var an_object = [ [1,2],
		  [5,6],
		  { "a": 121, "b": "hello"} ];
console.log(an_object);
*/
