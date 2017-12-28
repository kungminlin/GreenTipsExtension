var facts = [
	"Moving your thermostat down just two degrees in winter and up two degrees in summer could save about 2,000 pounds of carbon dioxide per year!",
	"Artificial lighting accounts for 44 percent of electricity use in office buildings.",
	"Using cold water can save up to 80 percent of the energy required to wash clothes.",
	"In the United States, paper products make up the largest percentage of municipal solid waste, and hard copy bills alone generate almost 2 million tons of carbon dioxide.",
	"In North America, fruits and vegetables travel an average of 1,500 miles before reaching your plate.",
	"Compact fluorescent lamps (CFLs) save energy and money – typically they use one-third to one-fifth electricity compared to traditional incandescent bulbs, and last eight to fifteen times longer."
];
var randId = Math.round(Math.random()*(facts.length-1));
document.getElementById("facts").innerHTML = facts[randId];