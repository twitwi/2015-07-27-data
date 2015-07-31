/*
		alert("Hello!");
		var an_obj = [ [1,2] , [5,6],{"a":121, "b":"helle"}];
		console.log(an_obj);*/
function processData(nationsData)
{//alert("data Loaded");
var first_country = nationsData[0];
//alert(first_country.region);

var mySvg = d3.select("#mygraph");
var myCircle = mySvg.append("circle");
myCircle.attr("cx",200);
myCircle.attr("cy",200);
myCircle.attr("r",10);
mySvg.attr("width","800px");

mySvg.attr("height","600px");
var xScale =d3.scale.log();
xScale.domain([300,1e5]).range([0,700]);
var yScale = d3.scale.linear();
yScale.domain([10,85]).range([600,0]);
var sizeScale = d3.scale.sqrt().domain([0,1e8]).range([0,30]);//domain data, range pixel
var allCircles = mySvg.selectAll(".circ").data(nationsData, function(d){return d.name;});
allCircles.enter().append("circle")
.attr("cx",function(d){return xScale(d.income[0])})
.attr("cy",function(d){return yScale(d.lifeExpectancy[0])})
.attr("r",function(d){return sizeScale(d.population[0])})
.attr("class","circ");
}
//alert("before loading");
d3.json("https://raw.githubusercontent.com/twitwi/2015-07-27-data/master/d3/nations.json",processData);
